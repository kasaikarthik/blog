import React from "react"
import { StaticQuery, graphql } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div><img src={require('../images/clipart.png')} style= {{width: '100px', height: '100px'}} alt="SK"/></div>
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
        {/* <a href='https://thesaikatrist.com' target="_blank" rel="noreferrer" className="button -primary">Visit my website &rarr;</a> */}
      </div>
    )}
  />
)