import React from 'react'
import { render } from 'react-dom'

import Main from './Main'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <Main />
      </div>
    )
  }
})
render(<App />, document.getElementById('app'))
