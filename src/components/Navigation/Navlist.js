import React from "react"
import { Link } from "gatsby"
import classes from "./Navlist.module.scss"

const Navlist = ({ navScroll, sideDrawerOpen, location }) => {
  let pathname = location ? location.pathname : null

  let link = navScroll ? classes.LinkLight : classes.LinkDark

  let active = navScroll ? classes.ActiveLinkDark : classes.ActiveLink

  console.log(pathname)

  return (
    <div className={classes.Link}>
      <ul>
        <li className={pathname === "/" ? active : link}>
          <Link to="/">Home</Link>
        </li>
        <li className={pathname === "/about" ? active : link}>
          <Link to="/about">About</Link>
        </li>

        <li className={pathname === "/music" ? active : link}>
          <Link to="/music">Music</Link>
        </li>

        <li className={pathname === "/calendar" ? active : link}>
          <Link to="/calendar">Calendar</Link>
        </li>

        <li className={pathname === "/contact" ? active : link}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navlist
