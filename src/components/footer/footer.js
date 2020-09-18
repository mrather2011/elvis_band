/** @jsx jsx */
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import classes from "./footer.module.scss"
import { css, jsx } from "@emotion/core"
import { colors } from "../../globalStyles/colors"

const Footer = ({ position, place }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const footerClass = css`
    position: ${position};
    ${place};
    left: 0;

    height: 75px;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // border: 1px solid red;

    p {
      color: ${colors.timberwolf};
    }
  `
  return (
    <div css={footerClass}>
      <p>Created by {data.site.siteMetadata.author} studios 2020</p>
    </div>
  )
}

export default Footer
