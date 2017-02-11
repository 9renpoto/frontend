/* @flow */
import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Bio } from '../src/'

storiesOf('Bio', module)
  .add('', () => (
    <Bio />
  ))
