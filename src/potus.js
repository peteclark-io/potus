import React from 'react'
import ReactDOM from 'react-dom'

import 'reset-css/sass/_reset.scss'
import './_css/main.scss'

import App from './components'

const root = document.querySelector('main')

ReactDOM.render(<App/>, root)
