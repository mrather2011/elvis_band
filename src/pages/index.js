import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Hero from "../components/Hero/Hero"

import Intro from "../components/Intro/Intro"
import Testimonials from "../components/Testimonials/Testimonials"
import Book from "../components/Book/Book"
import PhotoGallery from "../components/Slider_4/Container"

const IndexPage = props => {
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
