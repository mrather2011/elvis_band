import React from "react"
import classes from "./Gallery.module.scss"

const Gallery = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.Backdrop}></div>
      <div className={classes.TextBox}>
        <div className={classes.Dash}></div>
        <h1>Photo Gallery</h1>
      </div>
    </div>
  )
}

export default Gallery
