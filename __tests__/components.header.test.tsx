/* @flow */
import { create } from 'react-test-renderer'

import * as React from 'react'
import { Header } from '../src/components/Header'

describe('header', () => {
  test('render', () => {
    function foo (name: string) {
      return (
        <div className={name}>
          {'Hello'}
        </div>
      )
    }

    const wrapper = create(
      <Header baseUrl={'http://example.com'} Logo={foo} titles={['t1', 't2']} />
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
