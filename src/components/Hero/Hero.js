import React from "react"
import classes from "./Hero.module.scss"
import { Link } from "gatsby"

const Hero = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.TextContainer}>
        <div className={classes.Dash}></div>
        <div className={classes.Text}>
          <h1>The JC Underhill Band</h1>
          <h2>The authentic Elvis Experience</h2>
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

      <div className={classes.Image}></div>
    </div>
  )
}

export default Hero
