import React from 'react'
import { render } from 'react-dom'

import '../public/normalize.css'
import '../public/style.css'

import Main from './Main'

const App = React.createClass({
  render () {
    return (
      <div>
        <Main />
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
