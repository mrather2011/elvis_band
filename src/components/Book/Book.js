import React, { useState, useEffect } from "react"
import classes from "./Book.module.scss"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Book = props => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className={classes.Container}>
      <div className={classes.HeaderText}>
        <h1>Book a Date</h1>
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
        className={classes.FormContainer}
      >
        <form>
          <div>
            <input
              type="text"
              name="first-name"
              placeholder="First Name"
            ></input>
            <input type="text" name="last-name" placeholder="Last Name"></input>
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
            ></input>
            <input type="phone" name="phone" placeholder="Phone Number"></input>
          </div>

          <div>
            <label>How Did You Hear About Us</label>
            <select>
              <option value="google">google</option>
              <option value="facebook">facebook</option>
              <option value="referral">referral</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <textarea
              maxLength="300"
              wrap="hard"
              name="otherDetails"
              placeholder="Anything else we should know?"
            ></textarea>
          </div>
          <div>
            <input type="submit" value="submit"></input>
          </div>
        </form>
        <div className={classes.FormAction}>
          <h1>The King wants to perform for you</h1>
        </div>
      </motion.div>
    </div>
  )
}

export default Book
