/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

const Sidebar = props => {
  const container = css`
    position: relative;
    height: 30%;
    width: 100%;
    background: grey;
    z-index: 999;
  `

  const textContainer = css`
    height: 100%;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid green;
  `
  return (
    <div css={container}>
      <div css={textContainer}>
        <h1>Sidebar</h1>
      </div>

      {props.children}
    </div>
  )
}

export default Sidebar
