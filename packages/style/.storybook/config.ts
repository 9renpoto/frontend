import 'preact-material-components/Theme/style.css'
import { configure } from '@storybook/preact'

configure(() => [require('../src/story')], module)
