import React from 'react'
import Header from './Header'
import Articles from './Articles'

const Main = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <Articles />
      </div>
    )
  }
})

export default Main
