import { storiesOf } from '@storybook/react'
import { random } from 'faker'
import * as React from 'react'

import { Header } from '.'

export function DefaultHeader () {
  return (
    <Header
      Logo={(className: string) => (
        <a href='#' className={className}>
          {random.word()}
        </a>
      )}
      titles={['blog', 'profile', 'slides']}
      baseUrl='#'
    />
  )
}

storiesOf('Content', module)
  .add('Header', () => <DefaultHeader />)
  .add('Content', () => (
    <main>
      <DefaultHeader />
      <section className='hero is-primary'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>Hero title</h1>
            <h2 className='subtitle'>Hero subtitle</h2>
          </div>
        </div>
      </section>
    </main>
  ))
