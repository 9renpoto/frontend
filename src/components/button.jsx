import React, { Component, PropTypes } from 'react'

export class Button extends Component {
  render () {
    const text = this.props.text || 'Btn'
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
