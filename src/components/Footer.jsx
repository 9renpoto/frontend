/* @flow */
import React, { Component } from 'react'
import { Footer as RebassFooter } from 'rebass'

import { Bio } from './Bio'

export class Footer extends Component {
  render () {
    return (
      <RebassFooter>
        <Bio />
        Written by <a href='https://github.com/9renpoto'>@9renpoto</a>
      </RebassFooter>
    )
  }
}
