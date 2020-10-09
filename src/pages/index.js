import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Hero from "../components/Hero/Hero"

import Intro from "../components/Intro/Intro"
import Testimonials from "../components/Testimonials/Testimonials"
import Book from "../components/Book/Book"
import PhotoGallery from "../components/PhotoGallery/Container"
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  fragment fluidDetails on ImageSharpFluid {
    src
    base64
    tracedSVG
    srcWebp
    sizes
  }

  query {
    heroImage: file(relativePath: { eq: "img/elvis_backdrop.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...fluidDetails
        }
      }
    }
    galleryBgcImage: file(relativePath: { eq: "img/liveCrowd.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...fluidDetails
        }
      }
    }
    testimonialsImage: file(relativePath: { eq: "img/guitar.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...fluidDetails
        }
      }
    }
  }
`

const IndexPage = props => {
  return (
    <div>
      <Layout
        location={props.location}
        footerPlace={"top: 0"}
        footerPosition={"relative"}
      >
        <Head title={"Home"} />
        <Hero photo={props.data.heroImage.childImageSharp.fluid} />

        <PhotoGallery
          photo={props.data.galleryBgcImage.childImageSharp.fluid}
        />
        <Intro />
        <Testimonials
          photo={props.data.testimonialsImage.childImageSharp.fluid}
        />
        <Book />
      </Layout>
    </div>
  )
}

export default IndexPage
