/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { css, jsx } from "@emotion/core"
import Slide from "./Slide"
import SlideContent from "./SliderContent"
import Controls from "./Controls"
import Dots from "./Dots"
import {
  breakpoint780,
  breakpoint640,
  breakpoint500,
  breakpoint400,
  breakpoint300,
} from "../../globalStyles/breakpoints"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Slider = props => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  let carousel = props.carousel.edges

  // Breakpoint logic for slider styling
  let breakpointDivider = 2

  if (typeof window !== "undefined") {
    breakpointDivider = window.innerWidth < breakpoint780 ? 1 : 2
  }

  let container = css`
    position: relative;
    top: 0px;
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 999;
  `
  let textContainer = css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    z-index: 999;
    text-align: center;
    color: #fff;

    overflow: hidden;
  `

  let Divider = css`
    height: 50px;
    width: 50px;
    border-radius: 50%;
  `

  const sliderContainer = useRef()

  const [state, setState] = useState({
    containerWidth: 0,
    translateWidth: 0,
    reset: true,
    activeIndex: 1,
    translate: 0,
    transition: 0.5,
    jump: false,
    slideMargin: 25,
    divider: breakpointDivider,
    direction: null,
  })

  const updateDivider = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < breakpoint780 && state.divider > 1) {
        setState({
          ...state,
          divider: 2,
        })
      } else if (window.innerWidth > breakpoint780 && state.divider === 1) {
        setState({
          ...state,
          divider: 2,
        })
      }
    }
  }

  useEffect(() => {
    const windowResize = () => {
      setState({
        ...state,
        containerWidth: sliderContainer.current.offsetWidth / divider,
        translateWidth: sliderContainer.current.offsetWidth / divider,
        initialTranslateWidth:
          sliderContainer.current.offsetWidth / divider / divider +
          sliderContainer.current.offsetWidth / divider,
        translate:
          sliderContainer.current.offsetWidth / divider / divider +
          sliderContainer.current.offsetWidth / divider,

        // translate: 0,
      })

      window.addEventListener("resize", windowResize)
    }
    windowResize()
  }, [])

  const {
    jump,
    translate,
    transition,
    activeIndex,
    reset,
    containerWidth,
    slideMargin,
    translateWidth,
    divider,
    initialTranslateWidth,
    direction,
  } = state
  let count = Object.keys(carousel).length
  let width = containerWidth * (count + 4)

  const slidesLength = new Array(count + 4).fill(1)

  //   console.log("slideLength", slidesLength)
  // console.log("count", count)
  //   console.log("containerWidth", containerWidth)
  // console.log("width", width)
  // console.log("translate", translate)
  // console.log("index", activeIndex)
  // console.log("jump", jump)
  // console.log("margin", slideMargin)

  useEffect(() => {
    if (jump === false) {
      if (activeIndex === count + 1) {
        setTimeout(() => {
          setState({
            ...state,
            translate: initialTranslateWidth,
            activeIndex: 1,
            transition: 0,
            jump: false,
          })
        }, 500)
      } else if (activeIndex === 0) {
        setTimeout(() => {
          setState({
            ...state,
            translate: translateWidth * count + translateWidth / 2,
            activeIndex: count,
            transition: 0,
            jump: false,
          })
        }, 500)
      }
    } else if (jump) {
      if (direction === "up") {
        setTimeout(() => {
          setState({
            ...state,
            translate: activeIndex * translateWidth + translateWidth / divider,
            transition: 0,
            jump: false,
            direction: null,
          })
        }, 500)
      } else if (direction === "down") {
        setTimeout(() => {
          setState({
            ...state,
            translate:
              (activeIndex + 1) * translateWidth - translateWidth / divider,
            transition: 0,
            jump: false,
            direction: null,
          })
        }, 500)
      }
    }
  }, [state])

  const nextSlide = () => {
    if (activeIndex === count) {
      return setState({
        ...state,
        activeIndex: activeIndex + 1,
        translate: translateWidth + translate,
        transition: 0.5,
        jump: false,
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: translateWidth + translate,
      transition: 0.5,
      jump: false,
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        activeIndex: activeIndex - 1,
        translate: translate - translateWidth,
        transition: 0.5,
        jump: false,
      })
    }
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: translate - translateWidth,
      transition: 0.5,
      jump: false,
    })
  }

  const dotJump = index => {
    if (index > activeIndex) {
      setState({
        ...state,
        activeIndex: index,
        translate: translate + translateWidth,
        transition: 0.5,
        jump: true,
        direction: "up",
      })
    } else if (index < activeIndex) {
      setState({
        ...state,
        activeIndex: index,
        translate: translate - translateWidth,
        transition: 0.5,
        jump: true,
        direction: "down",
      })
    }
  }

  return (
    <motion.div
      animate={controls}
      initial="hidden"
      ref={ref}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 200 },
      }}
      transition={{ duration: 1 }}
      css={container}
    >
      <div css={textContainer} ref={sliderContainer}>
        <SlideContent
          ref={ref}
          count={count}
          activeIndex={activeIndex}
          width={width}
          translate={translate}
          transition={transition}
        >
          {slidesLength.map((test, i) => {
            let place = i - 2

            if (i === 0) {
              return (
                <Slide
                  key={i}
                  width={containerWidth}
                  title={carousel[count - 2].node.caption}
                  photo={carousel[count - 2].node.photo[0].fluid}
                  slideMargin={slideMargin}
                  slideKey={count - 2}
                  activeIndex={activeIndex}
                />
              )
            } else if (i === 1) {
              return (
                <Slide
                  key={i}
                  width={containerWidth}
                  title={carousel[count - 1].node.caption}
                  photo={carousel[count - 1].node.photo[0].fluid}
                  slideMargin={slideMargin}
                  slideKey={count - 1}
                  activeIndex={activeIndex}
                />
              )
            } else if (i === count + 2) {
              return (
                <Slide
                  key={i}
                  width={containerWidth}
                  title={carousel[0].node.caption}
                  photo={carousel[0].node.photo[0].fluid}
                  slideMargin={slideMargin}
                  slideKey={1}
                  activeIndex={activeIndex}
                />
              )
            } else if (i === count + 3) {
              return (
                <Slide
                  key={i}
                  width={containerWidth}
                  title={carousel[1].node.caption}
                  photo={carousel[1].node.photo[0].fluid}
                  slideMargin={slideMargin}
                  slideKey={2}
                  activeIndex={activeIndex}
                />
              )
            } else if (i <= count + 1 && i > 1) {
              return (
                <Slide
                  key={i}
                  width={containerWidth}
                  title={carousel[place].node.caption}
                  photo={carousel[place].node.photo[0].fluid}
                  slideMargin={slideMargin}
                  slideKey={place + 1}
                  activeIndex={activeIndex}
                />
              )
            }
          })}
        </SlideContent>
      </div>

      <Dots
        carousel={carousel}
        activeIndex={activeIndex}
        dotJump={index => dotJump(index)}
      />
      <Controls handleNext={nextSlide} handlePrev={prevSlide} />
    </motion.div>
  )
}

export default Slider
