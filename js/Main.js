import React from 'react'

import '../public/normalize.css'
import '../public/style.css'

import Header from './Header'
import Articles from './Articles'

const Main = React.createClass({
  render () {
    return (
      <div className='main-container'>
        <div className='displayDetail'>
          <Header />
          <div>
            <Articles />
          </div>
        </div>
      </div>
    )
  }
})

export default Main
