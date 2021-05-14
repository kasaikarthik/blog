import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as Icon from 'react-feather';


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  const { siteMetadata } = site
  const { frontmatter, html } = markdownRemark

  let imgurl = new URL(`${frontmatter.thumbnail}`, "https://blog.thesaikatrist.com");
  let twitterURL = (frontmatter.twitterComments != null ? frontmatter.twitterComments : 'https://twitter.com/thesaikatrist')
  var comments = new URL(twitterURL);

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | {siteMetadata.title}</title>
        <meta content="summary" property="og:type" name="type"></meta>
        <meta content="@thesaikatrist" property="twitter:site"></meta>
        <meta content={frontmatter.title} property="og:title" name="title"></meta>
        <meta content={frontmatter.metaDescription} property="og:description" name="description" />
        <meta content={imgurl} property="og:image:secure_url" name="image"/>
        <meta content={imgurl} property="og:image:secure" name="image"/>
        <meta content={imgurl} property="og:image" name="image"/>
        <meta property="twitter:card" name="twitter:card" content="summary_large_image"/>
        <meta name="author" content="Sai Karthik K A"/>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div className="post-thumbnail" style={{backgroundImage: `url(${frontmatter.thumbnail})`}}>
              <h1 className="post-title"><font className="front-matter-container">{frontmatter.title}</font></h1>
            </div>
          )}
          <p className="blog-post-content" style={{textAlign: "left", fontSize: "larger"}}><b>{frontmatter.author}</b><br/>
          <span style={{float:"left"}}>{frontmatter.date}</span>
          <span style={{float:"right", color: "#0d6ef6"}}>{frontmatter.time} min read</span></p><br/><br/><br/>
          <div className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
        <div className="hero-header" style={{textAlign: "center"}}>
            <br/><br/><a href={comments} target="_blank" rel="noreferrer" className="button -primary">View comments on Twitter&nbsp;&nbsp;&nbsp;<Icon.Twitter aria-label="Save"/></a>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        author
        title
        time
        twitterComments
        thumbnail
        metaDescription
      }
    }
  }
`