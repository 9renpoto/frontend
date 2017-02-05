/* @flow */
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import include from 'underscore.string/include'
import React from 'react'
import sortBy from 'lodash/sortBy'
import { get } from 'lodash/get'

import { rhythm } from '../utils/typography'
import Bio from './Bio'

type Props = {
  route: Object
}

class BlogIndex extends React.Component {
  props: Props
  render () {
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, 'data.date')
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visiblePages = sortedPages.filter(page => (
      get(page, 'file.ext') === 'md' && !include(page.path, '/404') || get(page, 'data.date')
    ))
    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            {'name': 'description', 'content': 'Sample blog'},
            {'name': 'keywords', 'content': 'blog, articles'}
          ]}
        />
        <Bio />
        <ul>
          {visiblePages.map((page) => (
            <li
              key={page.path}
              style={{
                marginBottom: rhythm(1 / 4)
              }}
              >
              <Link style={{boxShadow: 'none'}} to={prefixLink(page.path)}>
                {get(page, 'data.title', page.path)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default BlogIndex
