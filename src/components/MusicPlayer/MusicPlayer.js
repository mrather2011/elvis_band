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
import {
  breakpoint1280,
  breakpoint1040,
  breakpoint780,
  breakpoint640,
  breakpoint500,
  breakpoint400,
  breakpoint300,
} from "../../globalStyles/breakpoints"

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
  const [showSongList, setShowSongList] = useState(false)

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
      if (typeof window !== "undefined") {
        if (window.innerWidth < breakpoint500) {
          setShowSongList(!showSongList)
        }
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

  let containerWidth = "60%"
  let musicPadding = "100"
  let playerHeightAudio = "100"
  let playerHeightVideo = "450"

  if (typeof window !== "undefined") {
    if (window.innerWidth < breakpoint1280) {
      containerWidth = "50%"
    }
    if (window.innerWidth < breakpoint1040) {
      containerWidth = `calc(100% - ${musicPadding}px)`
    }
    if (window.innerWidth < breakpoint780) {
      musicPadding = "50"
    }
    if (window.innerWidth < breakpoint640) {
      playerHeightAudio = "150"
      playerHeightVideo = "150"
    }
    if (window.innerWidth < breakpoint500) {
      musicPadding = "20"
      containerWidth = `calc(100% - ${musicPadding}px * 2)`
    }
  }

  let playerHeight =
    mediaType === "audio" ? playerHeightAudio : playerHeightVideo
  let videoBorder = mediaType === "audio" ? null : "1px solid #fff"
  const musicCss = css`
    left: ${musicPadding}px;
    padding: 0 20px;
    position: relative;
    height: ${playerHeight}px;
    width: ${containerWidth};
    top: 150px;
    z-index: 99;
    transition: all 1s ease-in-out;
    border: 1px solid red;

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

  let songFontSize = "1.5rem"
  let songDetailY
  let songDetailx = "right: 25px;"
  if (typeof window !== "undefined") {
    if (window.innerWidth < breakpoint640) {
      songDetailY = "top: 0;"
      songDetailx = "left: 0"
    }
    if (window.innerWidth < breakpoint400) {
      songDetailx = "right: 0"
      songFontSize = "1.2rem"
    }
  }
  const songDetail = css`
    position: absolute;
    ${songDetailY}
    ${songDetailx}
    z-index: 999;
    p {
      text-align: center;
      font-size: ${songFontSize};
      color: black;
    }
    span {
      color: black;
      font-weight: bold;
    }
  `

  let buttonDimension = "50"
  let buttonFontSize = "1rem"
  let buttonMarginRight = "30px"
  let controlsFlex = `display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;`
  if (typeof window !== "undefined") {
    if (window.innerWidth < breakpoint640) {
      controlsFlex = `
    display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
    `
    }
    if (window.innerWidth < breakpoint500) {
      buttonDimension = "40"
    }

    if (window.innerWidth < breakpoint500) {
      buttonDimension = "35"
      buttonFontSize = "0.8rem"
    }
    if (window.innerWidth < breakpoint500) {
      buttonFontSize = "0.6rem"
    }

    if (window.innerWidth < breakpoint300) {
      buttonMarginRight = "5px"
    }
  }
  const controls = css`
    padding: 25px;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-box-shadow: 0px 0px 40px 15px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 0px 40px 15px rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 40px 15px rgba(255, 255, 255, 1);
    background: rgba(255, 255, 255, 0.7);

    z-index: 99;
    ${controlsFlex}

    div:nth-of-type(1),
    div:nth-of-type(2),
    div:nth-of-type(3),
    div:nth-of-type(4) {
      cursor: pointer;
      height: ${buttonDimension}px;
      width: ${buttonDimension}px;
      border: 1px solid black;
      border-radius: 50%;
      margin-right: ${buttonMarginRight};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease-in-out;

      svg {
        color: black;
        font-size: ${buttonFontSize};
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

  let mediaPosition = mediaType === "audio" ? "-60" : "-60"
  let mediaWith = "400px"
  if (typeof window !== "undefined") {
    if (window.innerWidth < breakpoint640) {
      mediaWith = "100%"
    }
  }

  const media = css`
    height: 50px;
    width: ${mediaWith};
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
      margin: 0 5px;
      padding: 0;
      width: 33%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      transition: all 0.3s ease-in-out;

      &:hover {
        background: rgba(255, 255, 255, 0.7);
        color: black;
        transform: scale(1.1);

        transition: all 0.3s ease-in-out;
      }
    }
  `

  const active = css`
    background: rgba(255, 255, 255, 0.7);
    color: black;
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  `

  const inActive = css`
    background: rgba(0, 0, 0, 0.7);
  `
  let timePositionY =
    mediaType === "audio" ? "bottom: -55px;" : "bottom: -45px;"
  let timePositionX = "right: 25px;"
  let timePositionBackground = "background: rgba(0, 0, 0, 0.7);"
  let timePositionColor = "#fff"
  if (typeof window !== "undefined") {
    if (window.innerWidth < breakpoint640) {
      timePositionY = "top: 10px;"
      timePositionX = "left: 20px;"
      timePositionBackground = "transparent"
      timePositionColor = "black"
    }
    if (window.innerWidth < breakpoint500) {
      timePositionY = "top: 25%;"
      timePositionX = "left: 50%; transform: translatex(-50%);"
    }
  }
  const timeCounter = css`
    z-index: 999;
    position: absolute;
    ${timePositionY}
    ${timePositionX}
    color: ${timePositionColor};
    ${timePositionBackground};
    transition: all 1s ease-in-out;
  `

  let trackListHeight = showSongList ? "500" : "0"
  let trackListOpacity = showSongList ? "1" : "0"
  let trackListPosition = "absolute"
  let trackListY = "top: -25px"
  let trackListX = "right: -350px"
  let trackListZIndex = "999"
  if (typeof window !== "undefined") {
    if (window.innerWidth < breakpoint1040) {
      trackListPosition = "fixed"
      trackListY = "top: 25%; transform: translatey(-100%);"
      trackListX = "left: 50%; transform: translatex(-50%)"
      trackListZIndex = "99999"
    }
  }
  const trackNames = css`
    padding: 0 15px;
    position: ${trackListPosition};
    ${trackListY};
    ${trackListX};
    height: ${trackListHeight}px;
    opacity: ${trackListOpacity};
    width: 300px;
    background: rgba(0, 0, 0, 0.9);
    z-index: ${trackListZIndex};

    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    transition: all 0.7s ease-in-out;

    &::-webkit-scrollbar {
      display: none;
    }

    ol {
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      li {
        color: #fff;
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

  const activeTrack = css`
    color: ${colors.greenBlueCrayola};
  `

  let backdropColor = "transparent"
  let backdropZIndex = "10"
  if (typeof window !== "undefined") {
    if (window.innerWidth < breakpoint1040) {
      backdropColor = "rgba(0,0,0,0.8)"
      backdropZIndex = "9999"
    }
  }
  const backdrop = css`
    position: fixed;
    top: 0px;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${backdropColor};
    z-index: ${backdropZIndex};
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
          onClick={() => setShowSongList(!showSongList)}
          css={showSongList ? active : inActive}
        >
          Song List
        </div>
        <div
          onClick={() => switchMedia("audio")}
          css={mediaType === "audio" ? active : inActive}
        >
          Audio
        </div>
        <div
          onClick={() => switchMedia("video")}
          css={mediaType === "video" ? active : inActive}
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
                  css={i === currTrack ? activeTrack : null}
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
      <div
        onClick={() => {
          setShowSongList(!showSongList)
        }}
        css={showSongList ? backdrop : null}
      ></div>
    </div>
  )
}

export default MusicPlayer
