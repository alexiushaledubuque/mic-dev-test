import React from 'react'
import ReactDOM from 'react-dom'

import MyTitle from './MyTitle'

var div = React.DOM.div

var MyHeaderFact = React.createFactory(MyTitle)

var Header = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFact({ title: 'ARTHUR', color: 'peru' }),
        MyTitleFact({ title: 'WORDS', color: 'papapyawhip' }),
        MyTitleFact({ title: 'SUBMITTED', color: 'wheat' })
      )
    )
  }
})

export default Header
