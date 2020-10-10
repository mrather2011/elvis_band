import React from "react"
import { ImCancelCircle } from "react-icons/im"
import Navlist from "../Navlist"
import classes from "./Sidedrawer.module.scss"

const SideDrawer = ({ sDOpen, toggleSideDrawer }) => {
  return (
    <div
      className={[
        classes.Container,
        sDOpen ? classes.ContainerOpen : classes.ContainerClosed,
      ].join(" ")}
    >
      <div
        onClick={toggleSideDrawer}
        className={[
          classes.Backdrop,
          sDOpen ? classes.BackdropOpen : classes.BackdropClosed,
        ].join(" ")}
      >
        <div
          className={[
            classes.NavItems,
            sDOpen ? classes.NavItemsOpen : classes.NavItemsClosed,
          ].join(" ")}
        >
          <ImCancelCircle onClick={toggleSideDrawer} size="3rem" />
          <Navlist />
        </div>
      </div>
    </div>
  )
}

export default SideDrawer
