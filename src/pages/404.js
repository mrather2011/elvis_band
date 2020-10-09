import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFound = props => {
  console.log(props)
  return (
    <Layout>
      <p>
        Page not found. Head back to the <Link to="/">home page</Link>
      </p>
    </Layout>
  )
}

export default NotFound
