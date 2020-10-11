/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const Controls = ({ handleNext, handlePrev }) => {
  let controls = css`
    left: 0;

    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 999;

    div {
      margin: 0 20px;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      cursor: pointer;
      border: 1px solid #fff;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease-in-out;

      svg {
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
