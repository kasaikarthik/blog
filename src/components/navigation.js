import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/tags">Tags</Link>
    <a href="https://thesaikatrist.com" rel= "noreferrer" target="_blank">Website</a>
    <ThemeChanger/>
  </nav>
  
)