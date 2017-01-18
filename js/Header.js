import React from 'react'

import preloadData from '../public/articles.json'
import moreData from '../public/more-articles.json'

const div = React.DOM.div

const rowCount = preloadData.length + moreData.length
console.log('Row count: ', rowCount)

const Header = React.createClass({
  render: function () {
    return (
      <div className='col-sm-12 headerBar divider'>
        <div className='col-sm-9 articles'>
          <div className='clearance'>UNPUBLISHED ARTICLES ({rowCount})</div>
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
