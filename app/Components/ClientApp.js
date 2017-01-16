var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
	render: function () {
		return (
			div(null,
				h1(null, this.props.title)
			)
		)
	}
})

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFact({ title: 'Props are great!'}),
        MyTitleFact({ title: 'Use props por favor!'}),
        MyTitleFact({ title: 'Props are the best!'})
      )
    )
  }
 })

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))