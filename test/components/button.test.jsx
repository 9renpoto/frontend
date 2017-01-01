import React from 'react'
import assert from 'assert'
import { mount, shallow } from 'enzyme'
import { random } from 'faker'

import { Button } from '../../index.js'

describe('first', function () {
  it('element check1', function () {
    const wrapper = mount(<Button />)
    assert(wrapper.find('button'))
  })

  it('text check', function () {
    const text = random.word()
    const wrapper = shallow(
      <Button text={text} />
    )
    assert(wrapper.text() === text)
  })
})
