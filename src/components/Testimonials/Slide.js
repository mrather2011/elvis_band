/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import {
  breakpoint780,
  breakpoint640,
  breakpoint500,
  breakpoint400,
  breakpoint300,
} from "../../globalStyles/breakpoints"

const Slide = props => {
  let textFontSize
  if (typeof window !== "undefined") {
    if (window.innerWidth < breakpoint300) {
      return (textFontSize = "font-size: 1.2rem;")
    }
  }

  console.log(textFontSize)
  let mainText = css`
    position: relative;
    top: 0;
    height: 100%;
    width: ${props.width}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    text-align: center;
    color: #fff;

    h2 {
      ${textFontSize}
    }
  `

  let Divider = css`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid #fff;
  `
  return (
    <div css={mainText}>
      <h2>{`"${props.quote}"`}</h2>
      <div css={Divider}></div>
      <div>
        <h3>{props.author}</h3>
      </div>
    </div>
  )
}

export default Slide
