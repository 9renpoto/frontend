import 'preact-material-components/Theme/style.css'
import { configure } from '@storybook/preact'
const req = require.context('..', true, /story.tsx?$/)
configure(req, module)
