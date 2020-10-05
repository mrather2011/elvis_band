/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

const Slide = props => {
  let active = props.activeIndex === props.slideKey

  let mainText = css`
    position: relative;
    top: 50%;
    transform: translatey(-50%);
    height: 70%;
    width: ${props.width}px;
    margin: 0 ${props.slideMargin}px;

    z-index: 999;
    text-align: center;
    color: #fff;

    background: url(${props.photo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: all 0.5s ease-in-out;
  `
  let Divider = css`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid #fff;
  `

  const commentary = css`
    position: absolute;
    height: 100%;
    width: 100%;
    color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #fff;
      background: rgba(0, 0, 0, 0.6);
      transition: all 0.3s ease-in-out;
    }
  `
  console.log("key", props.slideKey)
  // console.log("active", props.activeIndex)
  return (
    <div css={mainText}>
      <div css={commentary}>
        <h2>{props.quote}</h2>
        <h3>{props.author}</h3>
        <p>{props.title}</p>
      </div>
    </div>
  )
}

export default Slide
