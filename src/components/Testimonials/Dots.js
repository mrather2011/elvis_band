/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { testContent } from "./Content"

const Dots = ({ activeIndex, dotJump, testimonials }) => {
  const container = css`
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h1 {
      margin: 0;
      padding: 0;
    }
  `

  const active = css`
    background: #fff;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    border: 1px solid #fff;
  `
  const dot = css`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    border: 1px solid #fff;
  `

  return (
    <div css={container}>
      {Object.keys(testimonials).map((object, i) => {
        return (
          <div
            onClick={() => dotJump(i + 1)}
            key={i + 1}
            css={i + 1 === activeIndex ? active : dot}
          ></div>
        )
      })}
    </div>
  )
}

export default Dots
