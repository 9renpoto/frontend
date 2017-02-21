/* @flow */
import React, { Component } from 'react'
import { Avatar } from 'rebass'

import profilePic from './profile.png'

export class Bio extends Component {
  render () {
    return (
      <Avatar
        circle
        size={32}
        src={profilePic}
      />
    )
  }
}
