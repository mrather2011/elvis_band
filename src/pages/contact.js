import React from "react"
import Layout from "../components/layout"
import Contact from "../components/Contact/Contact"

const ContactPage = props => {
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
        <Contact />
      </Layout>
    </div>
  )
}

export default ContactPage
