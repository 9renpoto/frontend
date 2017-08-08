/* @flow */
import { describe, it } from 'mocha'
import { shallow } from 'enzyme'
import { internet, random } from 'faker'
import assert from 'assert'

import React from 'react'
import { Header } from '../src/components/Header'

describe('header', () => {
  it('render', () => {
    const wrapper = shallow(
      <Header
        baseUrl={internet.url()}
        Logo={() =>
          <div>
            {random.word()}
          </div>}
        titles={[random.word(), random.word()]}
      />
    )
    assert(wrapper.length === 1)
  })
})
