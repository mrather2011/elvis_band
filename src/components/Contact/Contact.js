import React, { useState } from "react"
import classes from "./Contact.module.scss"

const Contact = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.HeaderText}>
        <h1>Get In Touch</h1>
      </div>
      <div className={classes.FormContainer}>
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
            <select>
              <option value="Buy">Looking to Buy</option>
              <option value="Sell">Looking to Sell</option>
              <option value="marketValuation">
                Looking to get a sense of the market
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <textarea
              maxlength="300"
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
          <h1>Reach out to discuss playing at your venue</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact
