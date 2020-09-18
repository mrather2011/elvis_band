import React from "react"
import classes from "./Hero.module.scss"
import MusicPlayer from "../MusicPlayer/MusicPlayer"

const Hero = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.TextContainer}>
        <div className={classes.Dash}></div>
        <div className={classes.Text}>
          <h1>The JC Underhill Band</h1>
          <h2>The authentic Elvis Experience</h2>
          <div>
            <button>About Us</button>
            <button>Explore Music</button>
          </div>
        </div>
      </div>
      <MusicPlayer top={"150px"} />

      <div className={classes.Image}></div>
    </div>
  )
}

export default Hero
