/* @flow */
import React, { Component } from 'react'

type Props = {
  Logo: (className: string) => React$Element<any>,
  titles: Array<string>,
  baseUrl: string
}

export class Header extends Component<Props> {
  render () {
    const { Logo, titles, baseUrl } = this.props
    const logoClassName = 'nav-item title'
    return (
      <header className='nav'>
        <div className='nav-left'>
          {Logo(logoClassName)}
        </div>
        <div className='nav-right nav-menu'>
          {titles.map((title, index) =>
            <a className='nav-item' href={`${baseUrl}/${title}/`} key={index}>
              {title}
            </a>
          )}
        </div>
      </header>
    )
  }
}
