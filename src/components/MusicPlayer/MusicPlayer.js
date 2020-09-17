/** @jsx jsx */
import React, { useRef, useState, useEffect } from "react"
import classes from "./MusicPlayer.module.scss"
import { css, jsx } from "@emotion/core"
import testTrack from "../../../static/songs/test.mp3"
import { FaPlay, FaPause, FaForward, FaBackward, FaStop } from "react-icons/fa"

const MusicPlayer = props => {
  let progressElement = useRef()
  let audio = useRef()
  const [inPlay, setInPlay] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [barDimensions, setBarDimensions] = useState(0)

  let playBtn = inPlay ? <FaPause /> : <FaPlay />
  let nextBtn = <FaForward />
  let prevBtn = <FaBackward />
  let stopBtn = <FaStop />

  let displayTime

  const playPause = () => {
    if (audio.current.paused) {
      setInPlay(!inPlay)
      audio.current.play()
      formatTime()
    } else {
      audio.current.pause()
      setInPlay(!inPlay)
    }
  }

  const stopTrack = () => {
    audio.current.currentTime = 0
    setCurrentTime(0)
  }

  const songEnded = () => {
    audio.current.currentTime = 0
    setCurrentTime(0)
    inPlay(false)
  }

  const changeSongPosition = e => {
    if (barDimensions.width !== 0) {
      let xValue = e.clientX - progressElement.current.getBoundingClientRect().x
      console.log("xValue", xValue)
      let newProgress = (xValue / barDimensions.width) * duration
      audio.current.currentTime = newProgress
      setCurrentTime(newProgress)
    }
  }

  const progress = duration !== 0 ? (currentTime / duration) * 100 : 0

  useEffect(() => {
    setBarDimensions(progressElement.current.getBoundingClientRect())
  }, [progressElement.current])

  const formatTime = () => {
    console.log(currentTime)
  }

  let minutes = Math.floor(currentTime / 60)
  let seconds
  if (minutes === 0 && Math.floor(currentTime) < 10) {
    seconds = `0${Math.floor(currentTime)}`
  } else if (minutes === 0 && Math.floor(currentTime) > 10) {
    seconds = Math.floor(currentTime)
  } else if (minutes > 0 && Math.floor(currentTime) - minutes * 60 < 10) {
    seconds = `0${Math.floor(currentTime) - minutes * 60}`
  } else {
    seconds = Math.floor(currentTime) - minutes * 60
  }

  let formattedTime = `${minutes}:${seconds}`

  const progressBar = css`
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10px;
    width: ${progress}%;
    background: #fff;
    border-radius: 25px;
    z-index: 99;
    color: #fff;
  `

  const songLength = css`
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10px;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 25px;
    z-index: 999;
    color: #fff;
  `

  return (
    <div className={classes.MusicPlayer}>
      <div onClick={playPause}>{prevBtn}</div>
      <div onClick={stopTrack}>{stopBtn}</div>
      <div onClick={playPause}>{playBtn}</div>
      <div onClick={playPause}>{nextBtn}</div>
      <div className={classes.SongDetail}>
        <p>
          Song Name: <span>Example</span>
        </p>
      </div>
      <div
        css={songLength}
        ref={progressElement}
        onClick={e => changeSongPosition(e)}
      ></div>
      <div css={progressBar}>
        <p>{formattedTime}</p>
      </div>
      <audio
        ref={audio}
        onTimeUpdate={() => setCurrentTime(audio.current.currentTime)}
        onDurationChange={() => setDuration(audio.current.duration)}
        onEnded={songEnded}
      >
        <source src={testTrack} type="audio/mp3" />
      </audio>
    </div>
  )
}

export default MusicPlayer
