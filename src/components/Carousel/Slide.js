/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

const Slide = ({ content }) => (
  // background-image: url(${content});
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;
  <div
    css={css`
      position: relative;
      top: 0;
      height: 100%;
      width: 100%;

      cursor: pointer;
      z-index: 999;
      display: flex;
      flex-direction: row;
      justify-content: center;
    `}
  >
    <div css={ShadowHover}>
      <img css={ImageCSS} alt="photo" src={content}></img>
    </div>
  </div>
)

const ImageCSS = css`
  position: relative;
  max-height: 100%;
  max-width: 100%;
  z-index: 10;
`

const ShadowHover = css`
  height: 100%;
  width: 100;
  position: absolute;
  z-index: 999;
  &:hover {
    transform: scale(1.025);
    transition: all 0.3s ease-in-out;
    background: rgba(0, 0, 0, 0.5);
  }
`

export default Slide
