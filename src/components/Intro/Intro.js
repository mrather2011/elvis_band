import React, { useEffect } from "react"
import classes from "./Intro.module.scss"
import { Link } from "gatsby"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Intro = props => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      animate={controls}
      initial="hidden"
      ref={ref}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 1 }}
      className={classes.Container}
    >
      <div className={classes.TextBox}>
        <h1> Sample Our Music Catalogue</h1>
        <p>Classic Elvis, Beatles, and Other Covers</p>
        <Link to="/music">
          <button>Explore</button>
        </Link>
      </div>
    </motion.div>
  )
}

export default Intro
