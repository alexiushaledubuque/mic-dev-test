import React from 'react'

const div = React.DOM.div
const h1 = React.DOM.h1

const Header = React.createClass({
  render: function () {
    const style = { color: this.props.color }
    return (
       <div className='col-sm-12'>
        <form>
          <div className='form-group col-sm-6'>
            UNPUBLISHED ARTICLES
          </div>
          <div className='form-group col-sm-2'>
            AUTHOR
          </div>
          <div className='form-group col-sm-2'>
            WORDS
          </div>
          <div className='form-group col-sm-2'>
            SUBMITTED
          </div>
        </form>
      </div>
    )
  }
})

export default Header
