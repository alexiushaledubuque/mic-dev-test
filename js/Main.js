import React from 'react'

import '../public/normalize.css'
import '../public/style.css'

import Header from './Header'
import Articles from './Articles'

const Main = React.createClass({
  render () {
    return (
      <div className='main-container'>
        <Header />
        <Articles />
      </div>
    )
  }
})

export default Main
