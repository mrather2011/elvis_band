import React from "react"
import classes from "./History.module.scss"

const History = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.HeaderText}>
        <div className={classes.Dash}></div>
        <h1> History of the band</h1>
      </div>
      <div className={classes.TextBoxOne}>
        <div></div>
        <div>
          <div className={classes.Dash}></div>
          <h1>History Title One</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            fugiat.
          </p>
        </div>
      </div>

      <div className={classes.TextBoxTwo}>
        <div>
          <div className={classes.Dash}></div>
          <h1>History Title Two</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            fugiat.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default History
