import React from "react"
import { Link } from "gatsby"
import { kebabCase } from 'lodash'

const PostLink = ({ post }) => (
  <article className="card ">
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img
          className="dark-image"
          loading="lazy"
          src={post.frontmatter.thumbnail}
          alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <p className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </p>
      <div className="post-meta">{post.frontmatter.time} min read
      <br/>{post.frontmatter.author}</div><br/>
      {post.frontmatter.tags && Object.values(post.frontmatter.tags).map((tag, i) => (
        <>
          <Link key={i} to={`/tags/${kebabCase(tag)}/`} style={{ paddingRight: '10px' }}>{tag}</Link>
        </>
      ))}
    </header>
  </article>
)
export default PostLink