import React from "react"
import classes from "./Testimonials.module.scss"
import BackgroundImage from "gatsby-background-image"

const Testimonials = props => {
  return (
    <div className={classes.Container}>
      <BackgroundImage
        tag="section"
        style={{
          position: "absolute",
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
        <h1> Testimonials</h1>
      </div>
      <div className={classes.TextContainer}>
        <div className={classes.Example}>
          <h1>Example 1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            quae.
          </p>
        </div>
        <div className={classes.Example}>
          <h1>Example 2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            quae.
          </p>
        </div>
        <div className={classes.Example}>
          <h1>Example 3</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            quae.
          </p>
        </div>
      </div>
      <div className={classes.Backdrop}></div>
    </div>
  )
}

export default Testimonials
