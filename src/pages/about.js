import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import History from "../components/History/History"
import Experience from "../components/Experience/Experience"

const AboutPage = props => {
  return (
    <div>
      <Layout location={props.location}>
        <Head title={"Home"} />
        <div
          style={{
            display: "relative",
            top: "150px",
            height: "150px",
            border: "1px solid blue",
          }}
        ></div>
        <History />
        <Experience />
      </Layout>
    </div>
  )
}

export default AboutPage
