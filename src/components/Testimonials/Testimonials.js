import React, { useEffect } from "react"
import classes from "./Testimonials.module.scss"
import BackgroundImage from "gatsby-background-image"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import Slider from "./Slider"

const Testimonials = props => {
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
        }}
        fluid={props.photo}
      >
        {" "}
      </BackgroundImage>

      <div className={classes.HeaderText}>
        <h1> Testimonials</h1>
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
        className={classes.TextContainer}
      >
        <Slider testimonials={props.testimonials} />
      </motion.div>

      <div className={classes.Backdrop}></div>
    </div>
  )
}

export default Testimonials
