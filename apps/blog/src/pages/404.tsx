import React from 'react'
import { graphql } from 'gatsby'
import { Query } from '../graphqlTypes'
import { Layout } from '../components/Layout'
import { SEO } from '../components/Seo'

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

type Props = {
  location: Location
  data: Query
}

export const NotFoundPage = ({ data, location }: Props) => {
  const siteTitle = data.site!.siteMetadata!.title!

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}
