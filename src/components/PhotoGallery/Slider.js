/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react"
import { css, jsx } from "@emotion/core"
import Slide from "./Slide"
import SlideContent from "./SliderContent"
import Controls from "./Controls"
import Dots from "./Dots"
import Sidebar from "./Sidebar"
import { testContent } from "./Content"

const Slider = props => {
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
    divider: 2,
    direction: null,
  })

  useEffect(() => {
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
  let count = Object.keys(testContent).length
  let width = containerWidth * (count + 4)

  const slidesLength = new Array(count + 4).fill(1)

  //   console.log("slideLength", slidesLength)
  console.log("count", count)
  //   console.log("containerWidth", containerWidth)
  console.log("width", width)
  console.log("translate", translate)
  console.log("index", activeIndex)
  // console.log("jump", jump)
  console.log("margin", slideMargin)

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
    <div css={container}>
      <div css={textContainer} ref={sliderContainer}>
        <SlideContent
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
                  quote={testContent[count - 2].quote}
                  author={testContent[count - 2].author}
                  title={testContent[count - 2].title}
                  photo={testContent[count - 2].photo}
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
                  quote={testContent[count - 1].quote}
                  author={testContent[count - 1].author}
                  title={testContent[count - 1].title}
                  photo={testContent[count - 1].photo}
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
                  quote={testContent[0].quote}
                  author={testContent[0].author}
                  title={testContent[0].title}
                  photo={testContent[0].photo}
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
                  quote={testContent[1].quote}
                  author={testContent[1].author}
                  title={testContent[1].title}
                  photo={testContent[1].photo}
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
                  quote={testContent[place].quote}
                  author={testContent[place].author}
                  title={testContent[place].title}
                  photo={testContent[place].photo}
                  slideMargin={slideMargin}
                  slideKey={place + 1}
                  activeIndex={activeIndex}
                />
              )
            }
          })}
        </SlideContent>
      </div>

      <Dots activeIndex={activeIndex} dotJump={index => dotJump(index)} />
      <Controls handleNext={nextSlide} handlePrev={prevSlide} />
    </div>
  )
}

export default Slider
