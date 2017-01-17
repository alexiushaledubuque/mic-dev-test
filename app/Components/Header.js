import React from 'react'
// import ReactDOM from 'react-dom'

import MyTitle from './MyTitle'

var div = React.DOM.div

var MyHeaderFact = React.createFactory(MyTitle)

var Header = React.createClass({
  render: function () {
    return (
      div(null,
        MyHeaderFact({ title: 'ARTHUR', color: 'peru' }),
        MyHeaderFact({ title: 'WORDS', color: 'papapyawhip' }),
        MyHeaderFact({ title: 'SUBMITTED', color: 'wheat' })
      )
    )
  }
})

export default Header
