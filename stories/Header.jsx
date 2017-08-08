/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { random } from 'faker'

import { Header } from '../'

storiesOf('Content', module).add('Header', () =>
  <Header
    Logo={className =>
      <a href='#' className={className}>
        {random.word()}
      </a>}
    titles={['blog', 'profile', 'slides']}
    baseUrl='#'
  />
)
