/* @flow */
import React, { Component, PropTypes } from 'react'

export class Button extends Component {
  addPrefix (suffix: string) {
    return `Button ${suffix}`
  }
  render () {
    const text = this.addPrefix(this.props.text || 'Btn')
    return (
      <div>
        <button className='btn'>{text}</button>
      </div>
    )
  }
  static propTypes = {
    text: PropTypes.string
  }
}
