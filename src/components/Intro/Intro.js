import React from "react"
import classes from "./Intro.module.scss"

const Intro = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.TextBox}>
        <h1> Sample Our Music Catalogue</h1>
        <p>Classic Elvis, Beatles, and Other Covers</p>
        <button>Explore</button>
      </div>
    </div>
  )
}

export default Intro
