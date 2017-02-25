/* @flow */
import { describe, it } from 'mocha'
import { shallow } from 'enzyme'
import assert from 'assert'

import React from 'react'
import { Bio } from '../src/'

describe('bio', () => {
  it('render', () => {
    const wrapper = shallow(React.createElement(Bio))
    assert(wrapper.length === 1)
  })
})
