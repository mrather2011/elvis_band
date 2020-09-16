import React from "react"
import classes from "./Music.module.scss"

const Music = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.HeaderText}>
        <div className={classes.Dash}></div>
        <h1>A Taste of Our Catalogue</h1>
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
