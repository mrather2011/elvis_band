import React, { useRef } from "react"
import classes from "./Hero.module.scss"
import testTrack from "../../../static/songs/test.mp3"
import { FaPlay } from "react-icons/fa"

const Hero = props => {
  let audio = useRef()
  const playPause = () => {
    console.log("play")
    if (audio.current.paused) {
      audio.current.play()
    } else {
      audio.current.pause()
    }
  }
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
      <div className={classes.MusicPlayer}>
        <div onClick={playPause}>
          <FaPlay />
        </div>
        <div>
          <h1>Play</h1>
          <audio id="audio" ref={audio}>
            <source src={testTrack} type="audio/mp3" />
          </audio>
        </div>
      </div>
      <div className={classes.Image}></div>
    </div>
  )
}

export default Hero
