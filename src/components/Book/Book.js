import React, { useState } from "react"
import classes from "./Book.module.scss"

const Book = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.HeaderText}>
        <h1>Book a Date</h1>
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
          <h1>Reach out to discuss playing at your venue</h1>
        </div>
      </div>
    </div>
  )
}

export default Book
