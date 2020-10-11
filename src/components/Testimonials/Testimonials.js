import React, { useEffect } from "react"
import classes from "./Testimonials.module.scss"
import BackgroundImage from "gatsby-background-image"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

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
      </motion.div>

      <div className={classes.Backdrop}></div>
    </div>
  )
}

export default Testimonials
