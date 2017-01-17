var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFact({ title: 'Props are great!', color: 'peru' }),
        MyTitleFact({ title: 'Use props por favor!', color: 'papapyawhip' }),
        MyTitleFact({ title: 'Props are the best!', color: 'wheat' })
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
