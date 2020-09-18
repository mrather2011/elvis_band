import React from "react"
import classes from "./Gallery.module.scss"
import Slider from "../Carousel/Slider"
import image1 from "../../img/elvisflag.jpg"
import image2 from "../../img/elvispose.jpg"

const Gallery = props => {
  const imageCarousel = [image1, image2]
  return (
    <div className={classes.Container}>
      <div className={classes.Backdrop}></div>
      <div className={classes.TextBox}>
        <div className={classes.Dash}></div>
        <h1>Photo Gallery</h1>
      </div>
      <Slider slides={imageCarousel} />
    </div>
  )
}

export default Gallery
