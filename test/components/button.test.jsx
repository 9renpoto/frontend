import React from 'react'
import assert from 'power-assert'
import { mount, shallow } from 'enzyme'

import { Button } from '../../src/components/button'

describe('first', function () {
  it('element check1', function () {
    const wrapper = mount(<Button />)
    assert(wrapper.find('button'))
  })

  it('text check', function () {
    const wrapper = shallow(
      <Button text='opapy' />
    )
    assert(wrapper.text() === 'Button opapy')
  })
})
