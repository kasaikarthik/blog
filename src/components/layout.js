import React from "react"
import { Link } from "gatsby"
// import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import '@fontsource/poppins'
import * as Icon from 'react-feather';



export default ({ children }) => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `
  // )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">thesaikatrist</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} The Katrist Takes &bull; Developed with ReactJS and <span role="img" aria-label="love">💙</span> by <a href="https://thesaikatrist.com">Sai Karthik</a></p>
        <p>
        <a href="https://twitter.com/thesaikatrist" target="_blank" rel="noreferrer"><Icon.Twitter aria-label="Save"/></a>&nbsp;&nbsp;&nbsp;
        <a href="https://linkedin.com/in/kasaikarthik" target="_blank" rel="noreferrer"><Icon.Linkedin aria-label="Save"/></a>&nbsp;&nbsp;&nbsp;
        <a href="https://github.com/kasaikarthik" target="_blank" rel="noreferrer"><Icon.GitHub aria-label="Save"/></a>&nbsp;&nbsp;&nbsp;
        <a href="mailto:hello@thesaikatrist.com" target="_blank" rel="noreferrer"><Icon.Mail aria-label="Save"/></a>&nbsp;&nbsp;&nbsp;
        </p>
      </footer>
    </div>
  )
}
