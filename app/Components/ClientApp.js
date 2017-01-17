import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFact({ title: 'Props are gr8!', color: 'peru' }),
        MyTitleFact({ title: 'Use props por favor!', color: 'papapyawhip' }),
        MyTitleFact({ title: 'Props are the best!', color: 'wheat' })
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
