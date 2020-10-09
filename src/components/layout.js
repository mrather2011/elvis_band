import React, { useState } from "react"
import Footer from "./footer/footer"
import Navbar from "./Navigation/Navbar/Navbar"
import "../globalStyles/index.scss"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const Layout = props => {
  const [currPos, setCurrPos] = useState(0)
  useScrollPosition(({ prevPos, currPos }) => {
    setCurrPos(currPos)
  })

  const [navScroll, setNavScroll] = useState(false)

  if (!navScroll && currPos.y < -20) {
    setNavScroll(true)
  } else if (navScroll && currPos.y > -20) {
    setNavScroll(false)
  }

  return (
    <div style={{ boxSizing: "border-box", margin: "0", padding: "0" }}>
      <Navbar location={props.location} navScroll={navScroll} />
      {props.children}
      <Footer position={props.footerPosition} place={props.footerPlace} />
    </div>
  )
}

export default Layout
