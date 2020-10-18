import React, { useState } from "react"
// import logoImg from "../../../img/logo-only.png"
// import lightLogo from "../../../img/Logo light.png"
import classes from "./Navbar.module.scss"
import { FaAlignJustify, FaFacebook } from "react-icons/fa"
import Navlist from "../Navlist"
import Sidedrawer from "../Sidedrawer/Sidedrawer"

const Navbar = ({ navScroll, location }) => {
  //   let logo = navScroll ? lightLogo : logoImg

  const [sideDrawerOpen, toggleSideDrawer] = useState(false)
  const [darkPage, setDarkPage] = useState(true)

  if (location) {
    if (
      (!darkPage && location.pathname === "/") ||
      (!darkPage && location.pathname === "/music") ||
      (!darkPage && location.pathname === "/calendar")
    ) {
      setDarkPage(true)
    } else if (
      (darkPage && location.pathname === "/about") ||
      (darkPage && location.pathname === "/contact")
    ) {
      setDarkPage(false)
    }
  }

  const sideDrawerToggle = () => {
    toggleSideDrawer(!sideDrawerOpen)
  }

  return (
    <div
      className={[classes.Container, navScroll && classes.ContainerScroll].join(
        " "
      )}
    >
      <Sidedrawer toggleSideDrawer={sideDrawerToggle} sDOpen={sideDrawerOpen} />
      <div className={classes.SocialIcon}>
        <a
          target="_blank"
          href="https://www.facebook.com/JCandtheelvisexperience"
        >
          <FaFacebook />
        </a>
      </div>
      <div className={classes.FlexDivider}></div>
      <div
        className={[
          classes.ListContainer,
          !navScroll ? classes.ListContainerLight : classes.ListContainerDark,
        ].join(" ")}
      >
        <Navlist
          location={location}
          sideDrawerOpen={sideDrawerOpen}
          navScroll={navScroll}
        />
        <div
          className={[
            classes.SideDrawerToggle,
            navScroll || darkPage ? classes.SideDrawerToggleLight : null,
          ].join(" ")}
          onClick={sideDrawerToggle}
        >
          <FaAlignJustify size="2.5rem" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
