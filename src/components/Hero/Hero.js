import React from "react"
import classes from "./Hero.module.scss"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import {
  breakpoint780,
  breakpoint640,
  breakpoint500,
  breakpoint400,
  breakpoint300,
} from "../../globalStyles/breakpoints"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const Hero = props => {
  let shift = "right"
  if (typeof window !== "undefined") {
    shift = window.innerWidth < breakpoint500 ? "85%" : "right"
  }

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  return (
    <div ref={ref} className={classes.Container}>
      <div className={classes.Backdrop}></div>
      <BackgroundImage
        tag="section"
        className={classes.Image}
        style={{
          position: "absolute",
          backgroundPosition: shift,
        }}
        fluid={props.photo}
      ></BackgroundImage>
      <div className={classes.TextContainer}>
        <div className={classes.Dash}></div>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 1 }}
          className={classes.Text}
        >
          <h1>J.C. & The Elvis Experience</h1>
          <h2>Experience what it was like when Elvis ruled the airwaves</h2>
          <div>
            <Link to="/about">
              <button>About Us</button>
            </Link>
            <Link to="/music">
              <button>Explore Music</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
