import React from "react"
import Layout from "../components/layout"
import Calendar from "../components/Calendar/Calendar"

const CalendarPage = props => {
  return (
    <div>
      <Layout
        location={props.location}
        footerPlace={"top: 0"}
        footerPosition={"relative"}
      >
        <Calendar />
      </Layout>
    </div>
  )
}

export default CalendarPage
