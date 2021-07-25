import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/tags">Categories</Link>
    <a href="https://thesaikatrist.com" rel= "noreferrer" target="_blank">About Me</a>
    <ThemeChanger/>
  </nav>
  
)