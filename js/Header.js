import React from 'react'

import preloadData from '../public/articles.json'

const div = React.DOM.div

const rowCount = Object.keys(preloadData.news).length

const Header = React.createClass({
  render: function () {
    return (
      <div className='col-sm-12 headerBar'>
        <div className='col-sm-9'>
          <div className='clearance'>UNPUBLISHED ARTICLES ({rowCount})</div>
        </div>
        <div className='col-sm-1 author'>
          <div className='clearance'>AUTHOR</div>
        </div>
        <div className='col-sm-1 words sortable'>
          <div className='clearance'>WORDS</div>
        </div>
        <div className='col-sm-1 submitted sortable'>
          <div className='clearance'>SUBMITTED</div>
        </div>
      </div>
    )
  }
})

export default Header
