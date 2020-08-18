import { graphql } from 'gatsby'
import React, { PureComponent } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Query } from '../graphqlTypes'

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

interface Props {
  location: Location
  data: Query
}

export default class NotFoundPage extends PureComponent<Props> {
  render() {
    const { data } = this.props
    const siteTitle = data.site!.siteMetadata!.title!

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}
