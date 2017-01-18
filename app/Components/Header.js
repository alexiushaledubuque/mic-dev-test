import React from 'react'

const div = React.DOM.div
const h1 = React.DOM.h1

const Header = React.createClass({
  render: function () {
    const style = { color: this.props.color }
    return (
      <div className='col-sm-12 headerBar divider'>
        <div className='col-sm-9 articles'>
          <div className='clearance'>UNPUBLISHED ARTICLES</div>
        </div>
        <div className='col-sm-1 author'>
          <div className='clearance'>AUTHOR</div>
        </div>
        <div className='col-sm-1 words'>
          <div className='clearance'>WORDS</div>
        </div>
        <div className='col-sm-1 submitted'>
          <div className='clearance'>SUBMITTED</div>
        </div>
        
      </div>
    )
  }
})

export default Header
