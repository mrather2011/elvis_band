import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ServicesPage = props => {
  return (
    <div>
      <Layout location={props.location}>
        <Head title={"Home"} />
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
          tempore.
        </p>
      </Layout>
    </div>
  )
}

export default ServicesPage
