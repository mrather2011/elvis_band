import React from "react"
import classes from "./Music.module.scss"
import MusicPlayer from "../MusicPlayer/MusicPlayer"
import BackgroundImage from "gatsby-background-image"

const Music = props => {
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
      <div className={classes.HeaderText}>
        <div className={classes.Dash}></div>
        <h1>A Taste of Our Catalogue</h1>
      </div>

      <MusicPlayer
        videoTrackList={props.videoTrackList}
        audioTrackList={props.audioTrackList}
      />
    </div>
  )
}

export default Music
