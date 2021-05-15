import React from "react"
import PropTypes from "prop-types"


// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
        } tagged with ${tag}`

    return (
        <Layout>
            <h1 style={{textAlign: "center", color: "#0d6efd"}}>{tag}</h1>
            <p style={{fontSize: "x-large" , textAlign: "center"}}>{tagHeader}</p>
            <ul style={{paddingInlineStart: 0}}>
            <div className="grids">
            {edges.map(({ node }, i) => {
                const { title, path, thumbnail, time, date } = node.frontmatter
                return (
                    <article className="card" style={{justifyContent: "center", paddingTop: "15px", paddingBottom: "15px"}}>
                        <Link to={path}>
                            {!!thumbnail && (
                                <img
                                className="dark-image"
                                loading="lazy"
                                src={thumbnail}
                                alt={title + "- Featured Shot"} />
                            )}
                        </Link>

                        <header>
                            <h2 className="post-title">
                                <Link key={i} to={path}>{title}</Link>
                            </h2>
                            <h3 className="post-meta"> 
                                {date} - {time} min read<br/>
                            </h3>
                        </header>
                    </article>
                )
            })}
            </div>
            </ul><br/>
        </Layout>
    )
}

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                            path: PropTypes.string.isRequired
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            thumbnail
            date(formatString: "MMMM DD, YYYY")
            time
            author
          }
        }
      }
    }
  }
`