/* @flow */
import React, { Component } from 'react'
import { Avator } from 'rebass'

import profilePic from './profile.png'

export class Bio extends Component {
  render () {
    return (
      <Avator
        circle
        size={48}
        src={profilePic}
      />
    )
  }
}
