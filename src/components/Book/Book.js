import React, { useState, useEffect } from "react"
import classes from "./Book.module.scss"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import NumberFormat from "react-number-format"

const Book = props => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hearAboutUs: "",
    other: "",
  })

  const formDataHandler = (e, item) => {
    e.preventDefault()
    switch (item) {
      case "firstName":
        setFormData({
          ...formData,
          firstName: e.target.value,
        })
        break
      case "lastName":
        setFormData({
          ...formData,
          lastName: e.target.value,
        })
        break
      case "email":
        setFormData({
          ...formData,
          email: e.target.value,
        })
        break
      case "phone":
        setFormData({
          ...formData,
          phone: e.target.value,
        })
        break
      case "hearAboutUs":
        setFormData({
          ...formData,
          hearAboutUs: e.target.value,
        })
        break
      case "other":
        setFormData({
          ...formData,
          other: e.target.value,
        })
        break
      default:
        return null
    }
  }

  const clearFormData = e => {
    e.preventDefault()
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      hearAboutUs: "",
      other: "",
    })
  }
  console.log(formData)
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
        <form
          method="POST"
          data-netlify="true"
          onSubmit={e => clearFormData(e)}
        >
          <div>
            <input
              value={formData.firstName}
              onChange={e => formDataHandler(e, "firstName")}
              type="text"
              name="first-name"
              placeholder="First Name"
            ></input>
            <input
              value={formData.lastName}
              onChange={e => formDataHandler(e, "lastName")}
              type="text"
              name="last-name"
              placeholder="Last Name"
            ></input>
          </div>

          <div>
            <input
              value={formData.email}
              onChange={e => formDataHandler(e, "email")}
              type="email"
              name="email"
              placeholder="Email Address"
            ></input>
            <NumberFormat
              format="(###) ###-####"
              value={formData.phone}
              onChange={e => formDataHandler(e, "phone")}
              type="phone"
              name="phone"
              placeholder="Phone Number"
            ></NumberFormat>
          </div>

          <div>
            <label>How Did You Hear About Us</label>
            <select
              value={formData.hearAboutUs}
              onChange={e => formDataHandler(e, "hearAboutUs")}
            >
              <option value="google">google</option>
              <option value="facebook">facebook</option>
              <option value="referral">referral</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <textarea
              value={formData.other}
              onChange={e => formDataHandler(e, "other")}
              maxLength="300"
              wrap="hard"
              name="otherDetails"
              placeholder="Anything else we should know?"
            ></textarea>
          </div>
          <div>
            <input type="submit" value="Submit"></input>
          </div>
        </form>
        <div className={classes.FormAction}>
          <h1>The King wants to perform for you!</h1>
        </div>
      </motion.div>
    </div>
  )
}

export default Book
