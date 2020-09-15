import React from "react"
import Layout from "../components/layout"
import Music from "../components/Music/Music"

const MusicPage = props => {
  return (
    <div>
      <Layout location={props.location}>
        <div
          style={{
            display: "relative",
            top: "150px",
            height: "150px",
            border: "1px solid blue",
          }}
        ></div>
        <Music />
      </Layout>
    </div>
  )
}

export default MusicPage
