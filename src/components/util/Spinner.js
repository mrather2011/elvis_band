import React from "react"
import image from "../../img/Spinner-0.7s-217px.svg"

const Spinner = props => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "rgba(0,0,0,1)",
        position: "fixed",
        top: "0",
        zIndex: "999999999999999",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={image} alt="spinner"></img>
    </div>
  )
}

export default Spinner
