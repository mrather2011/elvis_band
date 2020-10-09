import React from "react"
import classes from "./History.module.scss"
import BackgroundImage from "gatsby-background-image"

const History = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.HeaderText}>
        <div className={classes.Dash}></div>
        <h1> History of the band</h1>
      </div>
      <div className={classes.TextBoxOne}>
        <BackgroundImage
          tag="section"
          style={{
            marginRight: "50px",
            height: "100%",
            width: "50%",
          }}
          fluid={props.photo}
        >
          {" "}
        </BackgroundImage>
        <div>
          <div className={classes.Dash}></div>

          <p>
            A regional favorite since the 1990’s! J.C. & The Elvis Experience
            has been entertaining crowds in the Seacoast area in one form or
            another for some 25 years! We’ve played it all; Fairs, Town events,
            4th of July celebrations, Historic Theaters, First Night events, and
            performance venue headlining! The current line up includes very
            seasoned and talented musicians which add to the show. The
            performance takes audiences on a ride through King’s early music all
            the way through his later ballads.
          </p>
        </div>
      </div>

      <div className={classes.TextBoxTwo}>
        <div>
          <div className={classes.Dash}></div>

          <p>
            The show includes his bodyguards, known as The Memphis Boys, as well
            as banter and stories told by the one and only King of Rock & Roll!
            It’s a fun performance for young and old, and an amazing experience
            that transports audiences back in time to an era when The King ruled
            the airwaves! A true Rock & Roll spectacle!
          </p>
        </div>
        <BackgroundImage
          tag="section"
          style={{
            marginRight: "50px",
            height: "100%",
            width: "50%",
          }}
          fluid={props.photoTwo}
        >
          {" "}
        </BackgroundImage>
      </div>
    </div>
  )
}

export default History
