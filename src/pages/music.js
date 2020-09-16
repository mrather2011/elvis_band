import React from "react"
import Layout from "../components/layout"
import Music from "../components/Music/Music"

const MusicPage = props => {
  return (
    <div>
      <Layout location={props.location}>
        <Music />
      </Layout>
    </div>
  )
}

export default MusicPage
