import React, { useEffect } from "react"
import classes from "./History.module.scss"
import BackgroundImage from "gatsby-background-image"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const History = props => {
  const controls = useAnimation()
  const [refOne, inViewOne] = useInView()
  const [refTwo, inViewTwo] = useInView()

  useEffect(() => {
    if (inViewOne || inViewTwo) {
      controls.start("visible")
    }
  }, [controls, inViewOne, inViewTwo])
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
        <motion.div
          animate={controls}
          initial="hidden"
          ref={refOne}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>
      </div>

      <div className={classes.TextBoxTwo}>
        <motion.div
          animate={controls}
          initial="hidden"
          ref={refTwo}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ duration: 1 }}
        >
          <div className={classes.Dash}></div>

          <p>
            The show includes his bodyguards, known as The Memphis Boys, as well
            as banter and stories told by the one and only King of Rock & Roll!
            It’s a fun performance for young and old, and an amazing experience
            that transports audiences back in time to an era when The King ruled
            the airwaves! A true Rock & Roll spectacle!
          </p>
        </motion.div>
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
