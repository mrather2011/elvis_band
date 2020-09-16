import React from "react"
import classes from "./Music.module.scss"

const Music = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.HeaderText}>
        <h1>Listen to Our Music</h1>
      </div>

      <div className={classes.MusicPlayer}>
        <div></div>
        <div>
          <h1>Play</h1>
        </div>
      </div>
    </div>
  )
}

export default Music
