import { render } from 'preact-render-to-string'
import { Header } from './Header'
import { h } from 'preact'

describe('Header', () => {
  xit('render', () => {
    const tree = render(<Header baseUrl='' titles={['hello']} />)
    expect(tree).toMatchSnapshot()
  })
})
