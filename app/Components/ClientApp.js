import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'

var MainComponent = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MainComponent), document.getElementById('app'))
