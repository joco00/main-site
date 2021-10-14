import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle="My Blog Posts">
      <h1>Jake's latest posts</h1>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }

    </Layout>
  )
}

export const query = graphql`
query 
{
    allMdx(sort: {fields: frontmatter___date, order: DESC}) 
    {
        nodes 
        {
            frontmatter 
            {
                date(formatString: "MMMM D, YYYY")
                title
                description
                tags
            }
            id
            body
            slug
        }
    }
}
`
export default BlogPage