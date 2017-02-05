/* @flow */
import React from 'react'
import { random } from 'faker'
import { storiesOf } from '@kadira/storybook'

import { Bio } from '../'

storiesOf('Button', module)
  .add('', () => (
    <Bio authorName={random.word()} />
  ))
