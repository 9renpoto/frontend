import Button from 'preact-material-components/Button'
import 'preact-material-components/Button/style.css'
import { h } from 'preact'
import { random } from 'faker'

export default { title: 'material' }

export function Buttons() {
  return <Button>{random.words()}</Button>
}
