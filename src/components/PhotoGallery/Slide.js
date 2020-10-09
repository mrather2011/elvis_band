/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import Img from "gatsby-image"

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

    border: 1px solid #fff;
    transition: all 0.5s ease-in-out;
  `
  let Divider = css`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    z-index: 10;
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
    z-index: 999;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #fff;
      background: rgba(0, 0, 0, 0.6);
      transition: all 0.3s ease-in-out;
    }
  `
  // console.log("key", props.slideKey)
  // console.log("active", props.activeIndex)
  return (
    <div css={mainText}>
      <Img
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: "0",
          zIndex: "99",
        }}
        fluid={props.photo}
      />
      <div css={commentary}>
        <p>{props.title}</p>
      </div>
    </div>
  )
}

export default Slide
