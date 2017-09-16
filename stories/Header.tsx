import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { random } from 'faker'

import { Header } from '../src'

storiesOf('Content', module).add('Header', () => (
  <Header
    Logo={(className: string) => (
      <a href='#' className={className}>
        {random.word()}
      </a>
    )}
    titles={['blog', 'profile', 'slides']}
    baseUrl='#'
  />
))
