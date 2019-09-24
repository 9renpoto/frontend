import { render } from 'preact-render-to-string'
import { h } from 'preact'
import { Header } from './Header'

describe('Header', () => {
  xit('render', () => {
    const tree = render(<Header baseUrl="" titles={['hello']} />)
    expect(tree).toMatchSnapshot()
  })
})
