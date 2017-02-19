/* @flow */
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container } from 'rebass'
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers'

type Props = {
  children: any,
  blogTitle: string,
  location: Object
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
      <Container>
        {header}
        {children}
      </Container>
    )
  }
}
