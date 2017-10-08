import * as React from 'react'

export interface Props {
  Logo: Function
  titles: Array<string>
  baseUrl: string
}

export function Header ({ Logo, titles, baseUrl }: Props) {
  const items = titles.map((title, index) => (
    <a className='nav-item' href={`${baseUrl}/${title}/`} key={index}>
      {title}
    </a>
  ))

  return (
    <header className='nav'>
      <div className='nav-left'>{Logo('nav-item title')}</div>
      <div className='nav-right nav-menu'>{items}</div>
    </header>
  )
}
