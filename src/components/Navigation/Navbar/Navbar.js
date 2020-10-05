import React, { useState } from "react"
// import logoImg from "../../../img/logo-only.png"
// import lightLogo from "../../../img/Logo light.png"
import classes from "./Navbar.module.scss"
import { FaAlignJustify } from "react-icons/fa"
import Navlist from "../Navlist"
import Sidedrawer from "../Sidedrawer/Sidedrawer"

const Navbar = ({ navScroll, location }) => {
  //   let logo = navScroll ? lightLogo : logoImg

  const [sideDrawerOpen, toggleSideDrawer] = useState(false)

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
      <div className={classes.LogoContainer}>
        {/* <img alt="Landmark Development" src={logo}></img> */}
      </div>
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
            navScroll && classes.SideDrawerToggleLight,
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
