/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { random } from 'faker'

import { Header } from '../src'

storiesOf('Content', module).add('Header', () =>
  <Header
    title={random.word()}
    titles={['blog', 'profile', 'slides']}
    baseUrl='#'
  />
)
