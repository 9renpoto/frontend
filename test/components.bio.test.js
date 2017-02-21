/* @flow */
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { Bio } from '../src/components/Bio'

test('Bio', t => {
  const wrapper = shallow(React.createElement(Bio))
  t.is(wrapper.length, 1)
})
