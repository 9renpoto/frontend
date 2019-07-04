import React, { PureComponent } from 'react'
import { Link, graphql } from 'gatsby'
import { rhythm } from '../utils/typography'
import { Query } from '../graphqlTypes'
import { Layout } from '../components/Layout'
import { SEO } from '../components/Seo'
import { Bio } from '../components/Bio'

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

type Props = {
  location: Location
  data: Query
}

export const BlogIndex = class extends PureComponent<Props> {
  render() {
    const siteTitle = this.props.data.site!.siteMetadata!.title!
    const posts = this.props.data.allMarkdownRemark!.edges

    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter!.title || node.fields!.slug
          return (
            <div key={node.fields!.slug!}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4)
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields!.slug!}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter!.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.excerpt!
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}
