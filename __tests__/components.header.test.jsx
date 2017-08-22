/* @flow */
import { create } from 'react-test-renderer'

import React from 'react'
import { Header } from '../lib/components/Header'

describe('header', () => {
  test('render', () => {
    const wrapper = create(
      <Header
        baseUrl={'http://example.com'}
        Logo={() =>
          <div>
            {'Hello'}
          </div>}
        titles={['t1', 't2']}
      />
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
