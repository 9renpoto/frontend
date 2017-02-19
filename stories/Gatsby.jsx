/* @flow */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { random } from 'faker'

import { Template, ReadNext, BlogIndex } from '../src'

storiesOf('Gatsuby', module)
  .add('Template', () =>
    <Template
      blogTitle={random.word()}
      children={''}
      location={location}
      prefixLink={() => {}}
    />
  )
  .add('ReadNext', () =>
    <ReadNext
      pages={[]}
      post={{}}
      prefixLink={() => {}}
    />
  )
  .add('BlogIndex', () =>
    <BlogIndex
      blogTitle={random.word()}
      prefixLink={() => {}}
      route={{}}
    />
  )
