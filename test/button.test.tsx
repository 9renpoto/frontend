import * as React from 'react'
import * as assert from 'power-assert'
import { mount } from 'enzyme'

import {Button} from '../src/components/button'

describe('first', function () {
  it('Button', function () {
    const wrapper = mount(<Button />)
    assert(wrapper)
  })
})
