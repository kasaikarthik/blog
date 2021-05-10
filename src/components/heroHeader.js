import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
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
        <Link to='https://thesaikatrist.com#contact' className="button -primary">Get in touch &rarr;</Link>
      </div>
    )}
  />
)