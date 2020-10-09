import React from "react"
import Layout from "../components/layout"
import Music from "../components/Music/Music"
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
    musicImage: file(relativePath: { eq: "img/SolidGuitar.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...fluidDetails
        }
      }
    }
  }
`

const MusicPage = props => {
  console.log(props.data)
  return (
    <div>
      <Layout
        location={props.location}
        footerPlace={"top: 0"}
        footerPosition={"relative"}
      >
        <Music photo={props.data.musicImage.childImageSharp.fluid} />
      </Layout>
    </div>
  )
}

export default MusicPage
