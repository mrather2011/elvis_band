import React from "react"
import Layout from "../components/layout"

const ContactPage = props => {
  return (
    <div>
      <Layout location={props.location}>
        <div style={{ height: "1200px" }}></div>
        <h1>Contact Page</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          inventore, optio quaerat unde omnis dolor est corporis exercitationem
          aperiam quae!
        </h2>
        <p>Posts will show up later</p>
      </Layout>
    </div>
  )
}

export default ContactPage
