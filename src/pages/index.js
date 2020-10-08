import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Hero from "../components/Hero/Hero"

import Intro from "../components/Intro/Intro"
import Testimonials from "../components/Testimonials/Testimonials"
import Book from "../components/Book/Book"
import PhotoGallery from "../components/PhotoGallery/Container"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = props => {
  // const CHILD_IMG_PARAMS = graphql`
  //   fragment ChildImageDetails on ImageSharp {
  //     src
  //     base64
  //     tracedSVG
  //     srcWebp
  //     sizes
  //   }
  // `

  // const queryData = useStaticQuery(graphql`
  //   query {
  //     heroImage: file(relativePath: { eq: "img/elvis_backdrop.png" }) {
  //       childImageSharp {
  //         fluid(quality: 90, maxWidth: 1920) {
  //           src
  //           base64
  //           tracedSVG
  //           srcWebp
  //           sizes
  //         }
  //       }
  //     }
  //   }
  // `)
  // console.log(queryData)
  return (
    <div>
      <Layout
        location={props.location}
        footerPlace={"top: 0"}
        footerPosition={"relative"}
      >
        <Head title={"Home"} />
        <Hero />

        <PhotoGallery />
        <Intro />
        <Testimonials />
        <Book />
      </Layout>
    </div>
  )
}

export default IndexPage
