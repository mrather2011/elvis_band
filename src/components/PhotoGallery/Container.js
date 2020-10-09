/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import classes from "./Container.module.scss"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import Slider from "./Slider"
import BackgroundImage from "gatsby-background-image"

const PhotoGallery = props => {
  return (
    <div className={classes.Container}>
      <BackgroundImage
        tag="section"
        style={{
          position: "absolute",
          zIndex: "1",
          height: "100%",
          width: "100%",
          top: "0",
        }}
        fluid={props.photo}
      >
        {" "}
      </BackgroundImage>
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
