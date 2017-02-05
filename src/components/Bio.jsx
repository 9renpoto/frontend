/* @flow */
import React, { Component } from 'react'

import profilePic from './profile.png'

type Props = {
  authorName: string
}

export class Bio extends Component {
  props: Props
  render () {
    const { authorName } = this.props
    return (
      <p >
        <img
          src={profilePic}
          alt={`author ${authorName}`}
          style={{
            float: 'left'
          }}
        />
        Written by <strong>{authorName}</strong>
      </p>
    )
  }
}
