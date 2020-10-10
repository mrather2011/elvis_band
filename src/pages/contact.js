import React from "react"
import Layout from "../components/layout"
import Book from "../components/Book/Book"

const ContactPage = props => {
  return (
    <div>
      <Layout
        location={props.location}
        footerPlace={"top: 0"}
        footerPosition={"relative"}
      >
        <div
          style={{
            display: "relative",
            top: "0px",
            height: "100px",
            // border: "1px solid blue",
          }}
        ></div>
        <Book />
      </Layout>
    </div>
  )
}

export default ContactPage
