/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

const Dot = ({ active, handleClick }) => (
  <span
    onClick={handleClick}
    css={css`
      padding: 10px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? "black" : "white"};
    `}
  />
)

const Dots = ({ slides, activeIndex, handleClick }) => (
  <div
    css={css`
      position: absolute;
      bottom: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} handleClick={handleClick} />
    ))}
  </div>
)

export default Dots