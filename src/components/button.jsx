/* @flow */
import styles from './button.css'
import React, { Component } from 'react'

type Props = {
  text: string
}

export class Button extends Component {
  props: Props
  render () {
    const text = this.props.text || 'Btn'
    return (
      <div>
        <button className={styles.className}>{text}</button>
      </div>
    )
  }
}
