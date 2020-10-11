/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react"
import { css, jsx } from "@emotion/core"
import Slide from "./Slide"
import SlideContent from "./SliderContent"
import Controls from "./Controls"
import Dots from "./Dots"
import { testContent } from "./Content"

const Slider = props => {
  let textContainer = css`
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    z-index: 999;
    text-align: flex-start;
    color: #fff;

    overflow: hidden;
  `

  let Divider = css`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid #fff;
  `

  const sliderContainer = useRef()

  const [state, setState] = useState({
    containerWidth: 0,
    reset: true,
    activeIndex: 1,
    translate: 0,
    transition: 0.5,
    jump: false,
  })

  useEffect(() => {
    const windowResize = () => {
      setState({
        ...state,
        containerWidth: sliderContainer.current.offsetWidth,
        translate: sliderContainer.current.offsetWidth,
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
  } = state
  let count = Object.keys(props.testimonials).length
  let width = containerWidth * (count + 2)
  const slidesLength = new Array(count + 2).fill(1)

  //   console.log("slideLength", slidesLength)
  // console.log("count", count)
  //   console.log("containerWidth", containerWidth)
  //   console.log("width", width)
  //   console.log("translate", translate)
  // console.log("index", activeIndex)

  useEffect(() => {
    if (jump === false) {
      if (activeIndex === count + 1) {
        setTimeout(() => {
          setState({
            ...state,
            translate: containerWidth,
            activeIndex: 1,
            transition: 0,
            jump: false,
          })
        }, 500)
      } else if (activeIndex === 0) {
        setTimeout(() => {
          setState({
            ...state,
            translate: containerWidth * count,
            activeIndex: count,
            transition: 0,
            jump: false,
          })
        }, 500)
      }
    } else if (jump) {
      setTimeout(() => {
        setState({
          ...state,
          translate: activeIndex * containerWidth,
          transition: 0,
          jump: false,
        })
      }, 500)
    }
  }, [state])

  const nextSlide = () => {
    if (activeIndex === count) {
      return setState({
        ...state,
        activeIndex: activeIndex + 1,
        translate: containerWidth * (activeIndex + 1),
        transition: 0.5,
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: containerWidth * (activeIndex + 1),
      transition: 0.5,
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        activeIndex: activeIndex - 1,
        translate: (activeIndex - 1) * containerWidth,
        transition: 0.5,
      })
    }
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * containerWidth,
      transition: 0.5,
    })
  }

  const dotJump = index => {
    if (index > activeIndex) {
      setState({
        ...state,
        activeIndex: index,
        translate: (activeIndex + 1) * containerWidth,
        transition: 0.5,
        jump: true,
      })
    } else if (index < activeIndex) {
      setState({
        ...state,
        activeIndex: index,
        translate: (activeIndex - 1) * containerWidth,
        transition: 0.5,
        jump: true,
      })
    }
  }

  return (
    <div css={textContainer} ref={sliderContainer}>
      <SlideContent
        count={count}
        activeIndex={activeIndex}
        width={width}
        translate={translate}
        transition={transition}
      >
        {slidesLength.map((test, i) => {
          let place = i - 1
          if (i === 0) {
            return (
              <Slide
                key={props.testimonials[count - 1].node.id}
                width={containerWidth}
                quote={props.testimonials[count - 1].node.quote}
                author={props.testimonials[count - 1].node.author}
              />
            )
          } else if (i === count + 1) {
            return (
              <Slide
                key={props.testimonials[0].node.id}
                width={containerWidth}
                quote={props.testimonials[0].node.quote}
                author={props.testimonials[0].node.author}
              />
            )
          } else {
            return (
              <Slide
                key={props.testimonials[place].node.id}
                width={containerWidth}
                quote={props.testimonials[place].node.quote}
                author={props.testimonials[place].node.author}
              />
            )
          }
        })}
      </SlideContent>
      <Dots
        testimonials={props.testimonials}
        activeIndex={activeIndex}
        dotJump={index => dotJump(index)}
      />
      <Controls handleNext={nextSlide} handlePrev={prevSlide} />
    </div>
  )
}

export default Slider
