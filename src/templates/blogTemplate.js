import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  const { siteMetadata } = site
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | {siteMetadata.title}</title>
        <meta content="summary" property="og:type" name="type"></meta>
        <meta content="@thesaikatrist" property="twitter:site"></meta>
        <meta content={frontmatter.title} property="og:title" name="title"></meta>
        <meta content={frontmatter.metaDescription} property="og:description" name="description" />
        <meta content={`url(${frontmatter.thumbnail},"https://blog.thesaikatrist.com")`} property="og:image:secure_url" name="image"/>
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
          <h2 style={{textAlign: "-webkit-center"}}>{frontmatter.date} - <font style={{color: "#0d6ef6"}}>{frontmatter.time} min read</font></h2><br/>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
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
        title
        time
        thumbnail
        metaDescription
      }
    }
  }
`