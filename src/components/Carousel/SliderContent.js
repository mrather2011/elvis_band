/** @jsx jsx */

import React from "react"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"

const SliderContent = props => {
  let transition
  if (props.reset) {
    transition = null
  } else {
    transition = `transition: transform ease-out ${props.transition}s;`
  }
  const SlideContentCSS = css`
    transform: translateX(-${props.translate}px);
    transition: transform ease-out ${props.transition}s;
    height: 100%;
    width: ${props.width}px;
    display: flex;
  `
  return <div css={SlideContentCSS}>{props.children}</div>
}

export default SliderContent
