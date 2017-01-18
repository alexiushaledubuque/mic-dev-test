import React from 'react'

const div = React.DOM.div
const h1 = React.DOM.h1

const Header = React.createClass({
  render: function () {
    const style = { color: this.props.color }
    return (
      <div className='col-sm-12 headerBar divider'>
        <div className='col-sm-9 articles'>
          UNPUBLISHED ARTICLES
        </div>
        <div className='col-sm-1 author'>
          AUTHOR
        </div>
        <div className='col-sm-1 words'>
          WORDS
        </div>
        <div className='col-sm-1 submitted'>
          SUBMITTED
        </div>
        
      </div>
    )
  }
})

export default Header
