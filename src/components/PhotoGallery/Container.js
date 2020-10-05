/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import classes from "./Container.module.scss"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import Slider from "./Slider"

const PhotoGallery = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.Backdrop}></div>
      <div className={classes.TextBox}>
        <div className={classes.Dash}></div>
        <h1>Photo Gallery</h1>
      </div>
      <Slider />
    </div>
  )
}

export default PhotoGallery
