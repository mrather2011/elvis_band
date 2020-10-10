import React from "react"
import Layout from "../components/layout"
import Calendar from "../components/Calendar/Calendar"
import { graphql } from "gatsby"

export const query = graphql`
  fragment fluidDetails on ImageSharpFluid {
    src
    base64
    tracedSVG
    srcWebp
    sizes
  }

  query {
    allContentfulCalendar {
      edges {
        node {
          showDate
          showLocation {
            lon
            lat
          }
          showPrice
          name
          id
        }
      }
    }
    calendarImage: file(relativePath: { eq: "img/livebandII.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...fluidDetails
        }
      }
    }
  }
`

const CalendarPage = props => {
  return (
    <div>
      <Layout
        location={props.location}
        footerPlace={"top: 0"}
        footerPosition={"relative"}
      >
        <Calendar
          showData={props.data.allContentfulCalendar.edges}
          photo={props.data.calendarImage.childImageSharp.fluid}
        />
      </Layout>
    </div>
  )
}

export default CalendarPage
