import React from "react"
import classes from "./Hero.module.scss"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

const Hero = props => {
  return (
    <div className={classes.Container}>
      <BackgroundImage
        tag="section"
        className={classes.Image}
        style={{ position: "absolute" }}
        fluid={props.photo}
      ></BackgroundImage>
      <div className={classes.TextContainer}>
        <div className={classes.Dash}></div>
        <div className={classes.Text}>
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
        </div>
      </div>

      {/* <div className={classes.Image}></div> */}
    </div>
  )
}

export default Hero
