/* @flow */
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container } from 'react-responsive-grid'
import { prefixLink } from '../../node_modules/gatsby/dist/isomorphic/gatsby-helpers'
import { rhythm } from '../utils/typography'

type Props = {
  children: any,
  blogTitle: string,
  location: Object,
  route: Object
}

export class Template extends Component {
  props: Props
  render () {
    const { location, children, blogTitle } = this.props
    let header
    if (location.pathname === prefixLink('/')) {
      header = (
        <h1
          style={{
            marginBottom: rhythm(1.5),
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit'
            }}
            to={prefixLink('/')}
          >
            {blogTitle}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit'
            }}
            to={prefixLink('/')}
          >
            {blogTitle}
          </Link>
        </h3>
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        {header}
        {children}
      </Container>
    )
  }
}
