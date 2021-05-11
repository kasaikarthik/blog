import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/tags">Tags</Link>
    <a href="https://thesaikatrist.com#contact" rel= "noreferrer" target="_blank">Contact</a>
    <ThemeChanger/>
  </nav>
  
)