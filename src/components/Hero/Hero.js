import React from "react"
import classes from "./Hero.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = props => {
  const queryData = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "img/elvis_backdrop.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            src
            base64
            tracedSVG
            srcWebp
            sizes
          }
        }
      }
    }
  `)
  const imageData = queryData.heroImage.childImageSharp.fluid

  return (
    <div className={classes.Container}>
      <BackgroundImage
        tag="section"
        className={classes.Image}
        style={{ position: "absolute" }}
        fluid={imageData}
      ></BackgroundImage>
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

      {/* <div className={classes.Image}></div> */}
    </div>
  )
}

export default Hero
