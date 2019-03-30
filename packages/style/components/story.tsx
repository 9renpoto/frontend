import { storiesOf } from '@storybook/preact'
import { Header } from '.'
import { h } from 'preact'

export function DefaultHeader () {
  return <Header titles={['blog', 'profile', 'slides']} baseUrl='#' />
}

storiesOf('Content', module)
  .add('Header', () => <DefaultHeader />)
  .add('Content', () => (
    <main>
      <DefaultHeader />
      <section className='hero is-primary'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>Hero title</h1>
            <h2 className='subtitle'>Hero subtitle</h2>
          </div>
        </div>
      </section>
    </main>
  ))
