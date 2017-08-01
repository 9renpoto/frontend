/* @flow */
import React, { Component } from 'react'

type Props = {
  title: string,
  titles: Array<string>,
  baseUrl: string
}

export class Header extends Component {
  props: Props
  render () {
    return (
      <header className='nav'>
        <div className='nav-left'>
          <a className='nav-item title' href='/'>
            {this.props.title}
          </a>
        </div>
        <div className='nav-right nav-menu'>
          {this.props.titles.map((title, index) =>
            <a className='nav-item' href={`${this.props.baseUrl}/${title}/`}>
              {title}
            </a>
          )}
        </div>
      </header>
    )
  }
}
