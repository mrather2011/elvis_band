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
    allContentfulSongs {
      edges {
        node {
          songName
          track {
            file {
              url
            }
            id
          }
          fileType
        }
      }
    }
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
  return (
    <div>
      <Layout
        location={props.location}
        footerPlace={"top: 0"}
        footerPosition={"relative"}
      >
        <Music
          audioTrackList={props.data.allContentfulSongs.edges}
          photo={props.data.musicImage.childImageSharp.fluid}
        />
      </Layout>
    </div>
  )
}

export default MusicPage
