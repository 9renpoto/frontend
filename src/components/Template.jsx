/* @flow */
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container } from 'rebass'

type Props = {
  children: any,
  blogTitle: string,
  location: Object,
  prefixLink: Function
}

export class Template extends Component {
  props: Props
  render () {
    const { location, children, blogTitle, prefixLink } = this.props
    let header
    if (location.pathname === prefixLink('/')) {
      header = (
        <h1>
          <Link to={prefixLink('/')}>
            {blogTitle}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={prefixLink('/')}>
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
