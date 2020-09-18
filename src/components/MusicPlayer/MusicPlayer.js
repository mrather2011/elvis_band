/** @jsx jsx */
import React, { useRef, useState, useEffect } from "react"
import { css, jsx } from "@emotion/core"
import { colors } from "../../globalStyles/colors"
import testTrack from "../../../static/songs/test.mp3"
import { FaPlay, FaPause, FaForward, FaBackward, FaStop } from "react-icons/fa"

const MusicPlayer = ({ top }) => {
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
    setInPlay(false)
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
    background: ${colors.timberwolf};
    border-radius: 25px;
    z-index: 99;
    color: ${colors.timberwolf};
  `

  const songLength = css`
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10px;
    width: 100%;
    border: 1px solid ${colors.timberwolf};
    border-radius: 25px;
    z-index: 999;
    color: ${colors.timberwolf};
  `

  const musicCss = css`
    margin: 0 100px;
    padding: 0 20px;
    position: relative;
    height: 150px;
    width: 50%;
    top: ${top};
    z-index: 99;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    div:nth-of-type(1),
    div:nth-of-type(2),
    div:nth-of-type(3),
    div:nth-of-type(4) {
      cursor: pointer;
      height: 50px;
      width: 50px;
      border: 1px solid ${colors.timberwolf};
      border-radius: 50%;
      margin-right: 30px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease-in-out;

      svg {
        color: ${colors.timberwolf};
      }
    }

    div:nth-of-type(1):hover,
    div:nth-of-type(2):hover,
    div:nth-of-type(3):hover,
    div:nth-of-type(4):hover {
      background: ${colors.timberwolf};
      transition: all 0.3s ease-in-out;

      svg {
        color: black;
      }
    }
  `

  const songDetail = css`
    p {
      font-size: 1.5rem;
      color: ${colors.timberwolf};
    }
    span {
      font-weight: bold;
    }
  `

  return (
    <div css={musicCss}>
      <div onClick={playPause}>{prevBtn}</div>
      <div onClick={stopTrack}>{stopBtn}</div>
      <div onClick={playPause}>{playBtn}</div>
      <div onClick={playPause}>{nextBtn}</div>
      <div css={songDetail}>
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
