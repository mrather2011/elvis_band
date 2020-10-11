import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import History from "../components/History/History"
import Experience from "../components/Experience/Experience"
import Book from "../components/Book/Book"
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
    historyOne: file(relativePath: { eq: "img/elvispose.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...fluidDetails
        }
      }
    }
    historyTwo: file(relativePath: { eq: "img/elvisstage.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...fluidDetails
        }
      }
    }
    memphis: file(relativePath: { eq: "img/memphis_recording.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...fluidDetails
        }
      }
    }
  }
`

const AboutPage = props => {
  return (
    <div>
      <Layout
        location={props.location}
        footerPlace={"top: 0"}
        footerPosition={"relative"}
      >
        <Head title={"Home"} />

        <History
          photo={props.data.historyOne.childImageSharp.fluid}
          photoTwo={props.data.historyTwo.childImageSharp.fluid}
        />
        <Experience photo={props.data.memphis.childImageSharp.fluid} />
        <Book />
      </Layout>
    </div>
  )
}

export default AboutPage
