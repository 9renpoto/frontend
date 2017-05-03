/* @flow */
import React from 'react'
import {storiesOf} from '@kadira/storybook'

import {Bio, Footer} from '../src/'

storiesOf('Only myself', module)
  .add('Bio', () => <Bio />)
  .add('Footer', () => <Footer />)
