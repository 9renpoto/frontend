import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Button } from '../'

storiesOf('Button', module)
  .add('with no text', () => (
    <Button />
  ))
  .add('with text', () => (
    <Button text='opapy' />
  ))
