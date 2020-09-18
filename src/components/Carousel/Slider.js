/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react"
import { css, jsx } from "@emotion/core"
import SliderContent from "./sliderContent"
import Slide from "./slide"
import Arrow from "./arrow"
import Dots from "./dots"

/**
 * @function Slider
 */
const Slider = props => {
  const sliderContainer = useRef()

  const [state, setState] = useState({
    containerWidth: 0,
    reset: true,
    activeIndex: 0,
    translate: 0,
    transition: 0.5,
  })

  useEffect(() => {
    setState({ ...state, containerWidth: sliderContainer.current.offsetWidth })
  }, [])

  const { translate, transition, activeIndex, reset, containerWidth } = state
  let count = props.slides.length
  let width = containerWidth * count

  const dotsLength = new Array(props.slides.length).fill(props.slides.length)
  const slidesLength = new Array(props.slides.length).fill(props.slides.length)

  console.log("count", count)
  console.log("containerWidth", containerWidth)
  console.log("activeIndex", activeIndex)
  console.log("translate", translate)
  console.log("width", width)
  console.log("dotsLength", dotsLength.length)

  const nextSlide = () => {
    if (activeIndex === dotsLength.length - 1) {
      return setState({
        ...state,

        translate: 0,
        activeIndex: 0,
      })
    }

    setState({
      ...state,

      activeIndex: activeIndex + 1,
      translate: width / count,
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: width / count,
        activeIndex: count - 1,
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * width,
    })
  }

  const SliderCSS = css`
    position: relative;
    top: 50px;
    height: 500px;
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    z-index: 999;
  `

  return (
    <div css={SliderCSS} ref={sliderContainer}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={width}
      >
        {props.slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />

      <Dots
        handleClick={nextSlide}
        slides={dotsLength}
        activeIndex={activeIndex}
      />
    </div>
  )
}

export default Slider
