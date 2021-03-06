import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges && edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta content="summary" property="og:type"></meta>
        <meta name="description" property="og:description" content={site.siteMetadata.description} />
        <meta content={site.siteMetadata.title} property="og:title" name="title"></meta>
        <meta content="https://blog.thesaikatrist.com/assets/thumbnail.png" property="og:image:secure" name="image"/>
        <meta content="https://blog.thesaikatrist.com/assets/thumbnail.png" property="og:image" name="image"/>
        <meta content="https://blog.thesaikatrist.com/assets/thumbnail.png" property="og:image:secure_url" name="image"/>
        <meta name="description" content={site.siteMetadata.description} />
        <meta property="twitter:card" name="twitter:card" content="summary_large_image"/>
        <meta name="author" content="Sai Karthik K A"/>
      </Helmet>
      <HeroHeader/>
      <h2>Blog Posts &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            time
            thumbnail
            tags
          }
        }
      }
    }
  }
`
