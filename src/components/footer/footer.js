import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import classes from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div className={classes.footer}>
      <p>Created by {data.site.siteMetadata.author} studios 2020</p>
    </div>
  )
}

export default Footer
