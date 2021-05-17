import React from "react"
import PropTypes from "prop-types"
import Layout from '../components/layout'

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import { kebabCase } from 'lodash';

const TagsPage = ({
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title },
        },
    },
}) => (
        <Layout>    
            <Helmet title={title} />
                <ul style={{paddingInlineStart: 0}}>
                <div className="grids">
                    {group.map((tag, i) => (
                        <article className="card" style={{justifyContent: "center", lineHeight:5}}>
                        <p style={{fontSize: "x-large"}} key={tag.fieldValue}>
                            <Link key={i} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                {tag.fieldValue} ({tag.totalCount})
                            </Link>
                        </p>
                        </article>
                    ))}
                    </div>
                </ul>
        </Layout>
    )

TagsPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                }).isRequired
            ),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }),
        }),
    }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`