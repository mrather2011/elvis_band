/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import {
  breakpoint780,
  breakpoint640,
  breakpoint500,
  breakpoint400,
  breakpoint300,
} from "../../globalStyles/breakpoints"

const Controls = ({ handleNext, handlePrev }) => {
  // Breakpoint logic for styling of control buttons
  let buttonDimension = window.innerHeight < breakpoint400 ? 30 : 70

  let controls = css`
    position: absolute;
    top: 50%;
    left: 0;

    height: 50px;

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 999;

    div {
      margin: 0 20px;
      height: ${buttonDimension}px;
      width: ${buttonDimension}px;
      border-radius: 50%;
      cursor: pointer;
      border: 1px solid #fff;
      background: black;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease-in-out;

      svg {
        font-size: 2rem;
        color: #fff;
      }
    }

    div:hover {
      background: #fff;
      transition: all 0.3s ease-in-out;

      svg {
        color: black;
      }
    }
  `
  return (
    <div css={controls}>
      <div onClick={handlePrev}>
        <FaArrowLeft />
      </div>
      <div onClick={handleNext}>
        <FaArrowRight />
      </div>
    </div>
  )
}

export default Controls
