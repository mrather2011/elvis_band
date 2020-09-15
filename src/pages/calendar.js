import React from "react"
import Layout from "../components/layout"
import Calendar from "../components/Calendar/Calendar"

const CalendarPage = props => {
  return (
    <div>
      <Layout location={props.location}>
        <div
          style={{
            display: "relative",
            top: "150px",
            height: "150px",
            border: "1px solid blue",
          }}
        ></div>
        <Calendar />
      </Layout>
    </div>
  )
}

export default CalendarPage
