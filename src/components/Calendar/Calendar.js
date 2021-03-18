import React, { useEffect } from "react"
import classes from "./Calendar.module.scss"
import BackgroundImage from "gatsby-background-image"
import moment from "moment"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Calendar = props => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

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
          backgroundPosition: "left",
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
      <motion.div
        animate={controls}
        initial="hidden"
        ref={ref}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 1 }}
        className={classes.Calendar}
      >
        {props.showData
          .slice(0)
          .reverse()
          .map((event, i) => {
            let dateTime = event.node.showDate

            dateTime = moment(dateTime).format("MMM Do YYYY, h:mm a")
            let dateStr = dateTime.substr(0, dateTime.indexOf(","))
            let timeStr = dateTime.substr(
              dateTime.indexOf(",") + 1,
              dateTime.length
            )

            return (
              <div key={event.node.id} className={classes.Example}>
                <p>
                  <span>{event.node.name}</span>
                </p>
                <p>
                  <span>{dateStr}</span>
                </p>
                <p>
                  <span>{timeStr}</span>
                </p>

                <p>
                  <span>{`$${event.node.showPrice}`}</span>
                </p>
              </div>
            )
          })}
      </motion.div>
    </div>
  )
}

export default Calendar
