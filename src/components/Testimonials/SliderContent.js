/** @jsx jsx */

import React from "react"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"

const SliderContent = props => {
  //   width, count, translate, transition, activeIndex

  const SlideContentCSS = css`
    transform: translateX(-${props.translate}px);
    transition: transform ease-out ${props.transition}s;
    height: 100%;
    width: ${props.width}px;
    display: flex;
    flex-direction: row;
  `
  return <div css={SlideContentCSS}>{props.children}</div>
}

export default SliderContent
