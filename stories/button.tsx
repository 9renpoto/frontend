import * as React from 'react'
import { storiesOf } from '@kadira/storybook'

import {Button} from '../'

declare const module: any

storiesOf('Button', module)
  .add('with no text', () => (
    <Button/>
  ))
  .add('with text', () => (
    <Button text='opapy'/>
  ))
