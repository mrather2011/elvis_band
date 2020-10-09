import React from "react"
import classes from "./Experience.module.scss"
import BackgroundImage from "gatsby-background-image"

const Experience = props => {
  return (
    <div className={classes.Container}>
      <BackgroundImage
        tag="section"
        style={{
          position: "fixed",
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
        <h1>The Elvis Experience</h1>
      </div>
    </div>
  )
}

export default Experience
