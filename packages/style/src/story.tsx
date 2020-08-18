import { random } from 'faker'
import Button from 'preact-material-components/Button'
import 'preact-material-components/Button/style.css'

export default { title: 'material' }

export function Buttons() {
  return <Button>{random.words()}</Button>
}
