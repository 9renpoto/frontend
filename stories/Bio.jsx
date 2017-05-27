/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react'

import { Bio, Footer } from '../src/'

storiesOf('profile', module)
  .add('Bio', () => <Bio />)
  .add('Footer', () => <Footer />)
