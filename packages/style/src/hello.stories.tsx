/** @jsx h */
import { h } from 'preact'

const meta = {
  title: 'Hello',
}

export default meta

const Template = (args) => <div {...args}>hello</div>

export const Hello = Template.bind({})
