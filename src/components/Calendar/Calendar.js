import React from "react"
import classes from "./Calendar.module.scss"
import BackgroundImage from "gatsby-background-image"

const Calendar = props => {
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
        <div className={classes.Dash}></div>
        <h1>Check Out Our Availability</h1>
      </div>
      <div className={classes.TextBox}>
        <h1>Upcoming Shows</h1>
        <div></div>
      </div>
      <div className={classes.Calendar}>
        <div className={classes.Example}>
          <p>
            Date 1: <span>Example</span>
          </p>
          <p>
            Location: <span>Example</span>
          </p>
          <p>
            Time: <span>Example</span>
          </p>
          <p>
            Price: <span>Example</span>
          </p>
        </div>
        <div className={classes.Example}>
          <p>
            Date 2: <span>Example</span>
          </p>
          <p>
            Location: <span>Example</span>
          </p>
          <p>
            Time: <span>Example</span>
          </p>
          <p>
            Price: <span>Example</span>
          </p>
        </div>
        <div className={classes.Example}>
          <p>
            Date 3: <span>Example</span>
          </p>
          <p>
            Location: <span>Example</span>
          </p>
          <p>
            Time: <span>Example</span>
          </p>
          <p>
            Price: <span>Example</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Calendar
