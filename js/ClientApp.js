import React from 'react'
import { render } from 'react-dom'

import '../public/normalize.css'
import '../public/style.css'

import Header from './Header'

const App = React.createClass({
  render () {
    return (
      <div>
        <Header />
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
