import React from "react"
import Layout from "../components/layout"
import Music from "../components/Music/Music"

const MusicPage = props => {
  return (
    <div>
      <Layout
        location={props.location}
        footerPlace={"top: 0"}
        footerPosition={"relative"}
      >
        <Music />
      </Layout>
    </div>
  )
}

export default MusicPage
