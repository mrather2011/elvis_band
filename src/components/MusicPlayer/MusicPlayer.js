/** @jsx jsx */
import React, { useRef, useState, useEffect } from "react"
import { css, jsx } from "@emotion/core"
import { colors } from "../../globalStyles/colors"
import Spinner from "../util/Spinner"

import video1 from "../../../static/vidoes/A Fan Favorite from York Days 2017.mp4"
import video2 from "../../../static/vidoes/American Trilogy.mp4"
import video3 from "../../../static/vidoes/Burning Love by J C  & The Elvis Experience 2020.mp4"
import video4 from "../../../static/vidoes/JC & the Elvis Experience All Shook Up at The Levitt Theatre.mp4"
import { FaPlay, FaPause, FaForward, FaBackward, FaStop } from "react-icons/fa"

const MusicPlayer = (props, { top }) => {
  let progressElement = useRef()
  let audio = useRef()
  const [inPlay, setInPlay] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [barDimensions, setBarDimensions] = useState(0)
  const [currTrack, setCurrTrack] = useState(0)
  const [mediaType, setMediaType] = useState("audio")
  const [showSpinner, setShowSpinner] = useState(true)

  let audioList = props.audioTrackList

  let videoList = [
    { track: video1, name: "A Fan Favorite" },
    { track: video2, name: "American Trilogy" },
    { track: video3, name: "Burning Love" },
    { track: video4, name: "All Shook Up" },
  ]

  let trackList = mediaType === "audio" ? audioList : videoList
  let trackListLength = trackList.length

  let audioSource =
    mediaType === "audio" ? trackList[currTrack].node.track.file.url : null
  let videoSource = mediaType === "video" ? trackList[currTrack].track : null

  let playBtn = inPlay ? <FaPause /> : <FaPlay />
  let nextBtn = <FaForward />
  let prevBtn = <FaBackward />
  let stopBtn = <FaStop />

  let displayTime

  const trackSelector = async id => {
    if (mediaType === "audio") {
      let idIndex = trackList.map(place => {
        return place.node.track.id
      })
      let indexNumber = idIndex.indexOf(id)

      setCurrTrack(indexNumber)
      audio.current.pause()

      await audio.current.load()
      if (inPlay) {
        audio.current.play()
      }
    }
  }

  const switchMedia = type => {
    stopTrack()
    audio.current.load()
    setMediaType(type)
  }

  const nextTrack = async () => {
    if (currTrack < trackListLength - 1) {
      setCurrTrack(currTrack + 1)
      audio.current.pause()

      await audio.current.load()
      if (inPlay) {
        audio.current.play()
      }
    } else {
      setCurrTrack(0)
      audio.current.pause()

      await audio.current.load()
      if (inPlay) {
        audio.current.play()
      }
    }
  }

  const prevTrack = async () => {
    if (currentTime < 5) {
      if (currTrack === 0) {
        setCurrTrack(trackListLength - 1)
        audio.current.pause()
        await audio.current.load()

        audio.current.play()
      } else {
        setCurrTrack(currTrack - 1)
        audio.current.pause()
        await audio.current.load()

        audio.current.play()
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
  let playerHeight = mediaType === "audio" ? "100" : "450"

  const progressBar = css`
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10px;
    width: ${progress}%;
    background: black;
    border: 1px solid ${colors.timberwolf};
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
    border: 1px solid black;

    border-radius: 25px;
    z-index: 9999;
    color: ${colors.timberwolf};
  `

  let videoBorder = mediaType === "audio" ? null : "1px solid #fff"
  const musicCss = css`
    margin: 0 100px;
    padding: 0 20px;
    position: relative;
    height: ${playerHeight}px;
    width: 60%;
    top: 150px;
    z-index: 999;
    transition: all 1s ease-in-out;

    video {
      position: absolute;
      top: 100px;
      left: 0;
      height: 300px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border: ${videoBorder};
      transition: all 2s ease-in-out;
    }
  `

  const songDetail = css`
    position: absolute;
    right: 25px;
    z-index: 999;
    p {
      mix-blend-mode: difference;
      font-size: 1.5rem;
      color: black;
    }
    span {
      color: black;
      font-weight: bold;
    }
  `

  const controls = css`
    padding: 0 25px;
    height: 100px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-box-shadow: 0px 0px 40px 15px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 0px 40px 15px rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 40px 15px rgba(255, 255, 255, 1);
    background: rgba(255, 255, 255, 0.7);

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
      border: 1px solid black;
      border-radius: 50%;
      margin-right: 30px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease-in-out;

      svg {
        color: black;
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
  let mediaPosition = mediaType === "audio" ? "-60" : "0"
  const media = css`
    height: 50px;
    width: 300px;
    position: absolute;
    bottom: ${mediaPosition}px;
    left: 0;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in-out;

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
  const timePosition = mediaType === "audio" ? "-75" : "-25"
  const timeCounter = css`
    position: absolute;
    bottom: ${timePosition}px;
    right: 25px;
    color: ${colors.timberwolf};
    transition: all 1s ease-in-out;
  `

  const trackNames = css`
    padding: 0 15px;
    position: absolute;
    top: -25px;
    right: -350px;
    height: 500px;
    width: 300px;
    background: rgba(255, 255, 255, 0.9);
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    ol {
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      li {
        padding: 15px 25px;
        font-size: 1.3rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }

      li:hover {
        transform: scale(1.05);
        font-weight: bold;
        transition: all 0.3s ease-in-out;
      }
    }
  `

  return (
    <div css={musicCss}>
      <video
        ref={audio}
        onTimeUpdate={() => setCurrentTime(audio.current.currentTime)}
        onDurationChange={() => setDuration(audio.current.duration)}
        onEnded={songEnded}
        src={mediaType === "audio" ? audioSource : videoSource}
        type={`audio/mp3`}
      >
        {showSpinner ? <Spinner /> : null}
      </video>
      <div css={controls}>
        <div onClick={prevTrack}>{prevBtn}</div>
        <div onClick={stopTrack}>{stopBtn}</div>
        <div onClick={playPause}>{playBtn}</div>
        <div onClick={nextTrack}>{nextBtn}</div>
        <div css={songDetail}>
          <p>
            <span>
              {mediaType === "audio" && trackList[currTrack].node.songName}
            </span>
          </p>
        </div>
        <div
          css={songLength}
          ref={progressElement}
          onClick={e => changeSongPosition(e)}
        ></div>
        <div css={progressBar}></div>
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
      <p css={timeCounter}>{formattedTime}</p>
      <div css={trackNames}>
        <ol>
          {trackList.map((track, i) => {
            if (mediaType === "audio") {
              return (
                <li
                  onClick={() => trackSelector(track.node.track.id)}
                  key={track.node.track.id}
                >
                  {track.node.songName}
                </li>
              )
            }
          })}
        </ol>
      </div>
    </div>
  )
}

export default MusicPlayer
