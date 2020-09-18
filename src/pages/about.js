import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import History from "../components/History/History"
import Experience from "../components/Experience/Experience"
import Book from "../components/Book/Book"

const AboutPage = props => {
  return (
    <div>
      <Layout
        location={props.location}
        footerPlace={"top: 0"}
        footerPosition={"relative"}
      >
        <Head title={"Home"} />
        <div
          style={{
            display: "relative",
            top: "0",
            height: "100px",
            // border: "1px solid blue",
          }}
        ></div>
        <History />
        <Experience />
        <Book />
      </Layout>
    </div>
  )
}

export default AboutPage
