/** @jsx jsx */
import React, { useRef, useState, useEffect } from "react"
import { css, jsx } from "@emotion/core"
import { colors } from "../../globalStyles/colors"

import testTrack2 from "../../../static/songs/American Trilogy.mp3"
import testTrack3 from "../../../static/songs/Burning Love by J C  & The Elvis Experience 2020.mp3"
import video1 from "../../../static/vidoes/A Fan Favorite from York Days 2017.mp4"
import video2 from "../../../static/vidoes/American Trilogy.mp4"
import video3 from "../../../static/vidoes/Burning Love by J C  & The Elvis Experience 2020.mp4"
import video4 from "../../../static/vidoes/JC & the Elvis Experience All Shook Up at The Levitt Theatre.mp4"
import { FaPlay, FaPause, FaForward, FaBackward, FaStop } from "react-icons/fa"

const MusicPlayer = ({ top }) => {
  let progressElement = useRef()
  let audio = useRef()
  const [inPlay, setInPlay] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [barDimensions, setBarDimensions] = useState(0)
  const [currTrack, setCurrTrack] = useState(0)
  const [mediaType, setMediaType] = useState("audio")

  let audioList = [
    { track: testTrack2, name: "American Trilogy" },
    { track: testTrack3, name: "Burning Love" },
  ]

  let videoList = [
    { track: video1, name: "A Fan Favorite" },
    { track: video2, name: "American Trilogy" },
    { track: video3, name: "Burning Love" },
    { track: video4, name: "All Shook Up" },
  ]

  let trackList = mediaType === "audio" ? audioList : videoList
  let trackListLength = trackList.length

  let playBtn = inPlay ? <FaPause /> : <FaPlay />
  let nextBtn = <FaForward />
  let prevBtn = <FaBackward />
  let stopBtn = <FaStop />

  let displayTime

  const switchMedia = type => {
    stopTrack()
    audio.current.load()
    setMediaType(type)
  }

  const nextTrack = () => {
    if (currTrack < trackListLength - 1) {
      setCurrTrack(currTrack + 1)
      audio.current.pause()
      audio.current.load()
      if (inPlay) {
        audio.current.play()
      }
    } else {
      setCurrTrack(0)
      audio.current.pause()
      audio.current.load()
      if (inPlay) {
        audio.current.play()
      }
    }
  }

  const prevTrack = () => {
    if (currentTime < 5) {
      if (currTrack === 0) {
        setCurrTrack(trackListLength - 1)
        audio.current.pause()
        audio.current.load()
        if (inPlay) {
          audio.current.play()
        }
      } else {
        setCurrTrack(currTrack - 1)
        audio.current.pause()
        audio.current.load()
        if (inPlay) {
          audio.current.play()
        }
      }
    } else {
      audio.current.pause()
      audio.current.currentTime = 0
      setCurrentTime(0)
      audio.current.play()
    }
  }

  const playPause = () => {
    if (trackListLength > 0) {
      if (audio.current.paused) {
        setInPlay(!inPlay)
        audio.current.play()
      } else {
        audio.current.pause()
        setInPlay(!inPlay)
      }
    }
  }

  const stopTrack = () => {
    audio.current.pause()
    audio.current.currentTime = 0
    setCurrentTime(0)
    if (inPlay) {
      setInPlay(!inPlay)
    }
  }

  const songEnded = () => {
    audio.current.currentTime = 0
    setCurrentTime(0)
    setInPlay(false)
  }

  const changeSongPosition = e => {
    if (barDimensions.width !== 0) {
      let xValue = e.clientX - progressElement.current.getBoundingClientRect().x

      let newProgress = (xValue / barDimensions.width) * duration
      audio.current.currentTime = newProgress
      setCurrentTime(newProgress)
    }
  }

  const progress = duration !== 0 ? (currentTime / duration) * 100 : 0

  useEffect(() => {
    setBarDimensions(progressElement.current.getBoundingClientRect())
  }, [progressElement.current])

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
    height: 600px;
    width: 800px;
    top: 100px;

    video {
      position: absolute;
      top: 0;
      left: 0;
      height: 500px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  `

  const songDetail = css`
    position: absolute;
    right: 0;
    p {
      font-size: 1.5rem;
      color: ${colors.timberwolf};
    }
    span {
      font-weight: bold;
    }
  `

  const controls = css`
    height: 100px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;

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

  const media = css`
    height: 50px;
    width: 300px;
    position: absolute;
    bottom: -60px;
    right: 0;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    div {
      margin: 0;
      padding: 0;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: 1px solid #fff;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: #fff;
        color: black;
        transform: scale(1.1);
        border: 1px solid black;
        transition: all 0.3s ease-in-out;
      }
    }
  `

  const active = css`
    background: #fff;
    color: black;
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  `

  return (
    <div css={musicCss}>
      <video
        ref={audio}
        onTimeUpdate={() => setCurrentTime(audio.current.currentTime)}
        onDurationChange={() => setDuration(audio.current.duration)}
        onEnded={songEnded}
      >
        <source src={trackList[currTrack].track} type="audio/mp3" />
      </video>
      <div css={controls}>
        <div onClick={prevTrack}>{prevBtn}</div>
        <div onClick={stopTrack}>{stopBtn}</div>
        <div onClick={playPause}>{playBtn}</div>
        <div onClick={nextTrack}>{nextBtn}</div>
        <div css={songDetail}>
          <p>
            <span>{trackList[currTrack].name}</span>
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
      </div>
      <div css={media}>
        <div
          onClick={() => switchMedia("audio")}
          css={mediaType === "audio" && active}
        >
          Audio
        </div>
        <div
          onClick={() => switchMedia("video")}
          css={mediaType === "video" && active}
        >
          Video
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer
