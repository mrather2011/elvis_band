import React from "react"
import classes from "./Music.module.scss"
import MusicPlayer from "../MusicPlayer/MusicPlayer"

const Music = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.HeaderText}>
        <div className={classes.Dash}></div>
        <h1>A Taste of Our Catalogue</h1>
      </div>

      <MusicPlayer top={"55vh"} />
    </div>
  )
}

export default Music
