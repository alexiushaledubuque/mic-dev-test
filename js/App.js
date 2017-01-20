import React from 'react'
import { Match } from 'react-router'
import Main from './Main'

const App = () => {
  return (
    <div className='app'>
      <Match exactly pattern='/' component={Main} />
    </div>
  )
}

export default App
