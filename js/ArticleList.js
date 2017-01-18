import React from 'react'

const ArticleList = React.createClass({
  render () {
    return (
      <div className='col-sm-12 divider'>
        <div className='articleListing'>
          <img src={this.props.story.image} className='resize' />
          <p><a href={this.props.story.url}>{this.props.story.title}</a></p>
          <p className='col-sm-1 author'>{this.props.story.profile.first_name} {this.props.story.profile.last_name}</p>
          <p className='col-sm-1 words'>{this.props.story.words}</p>
          <p className='col-sm-1 submitted'>{this.props.story.publish_at}</p>
        </div>
      </div>
    )
  }
})

export default ArticleList
