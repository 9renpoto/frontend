import { graphql, Link } from "gatsby";
import React, { PureComponent } from "react";
import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Query } from "../graphqlTypes";
import { rhythm } from "../utils/typography";

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
`;

interface Props {
  location: Location;
  data: Query;
}

export default class BlogIndex extends PureComponent<Props> {
  render() {
    const { data } = this.props;
    const siteTitle = data.site!.siteMetadata!.title!;
    const posts = data.allMarkdownRemark!.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" keywords={[`blog`, `javascript`, `react`]} />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter!.title || node.fields!.slug;
          return (
            <div key={node.fields!.slug!}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields!.slug!}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter!.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.excerpt!,
                }}
              />
            </div>
          );
        })}
      </Layout>
    );
  }
}
