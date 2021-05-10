import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import '@fontsource/poppins'
import * as Icon from 'react-feather';



export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} thesaikatrist &bull; Crafted with <span role="img" aria-label="love">💙</span> by <a href="https://thesaikatrist.com">Sai Karthik</a></p>
        <p>
        <a href="https://twitter.com/thesaikatrist" target="_blank"><Icon.Twitter /></a>&nbsp;&nbsp;&nbsp;
        <a href="https://linkedin.com/in/kasaikarthik" target="_blank"><Icon.Linkedin /></a>&nbsp;&nbsp;&nbsp;
        <a href="https://github.com/kasaikarthik" target="_blank"><Icon.GitHub /></a>&nbsp;&nbsp;&nbsp;
        <a href="mailto:hello@thesaikatrist.com" target="_blank"><Icon.Mail /></a>&nbsp;&nbsp;&nbsp;
        </p>
      </footer>
    </div>
  )
}
