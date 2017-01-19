import React from 'react'

const { object, string, number } = React.PropTypes

const ArticleList = React.createClass({
  propTypes: {
    image: string,
    url: string,
    title: string,
    profile: object,
    words: number,
    publish_at: string
  },
  render () {
    return (
      <div className='col-sm-12 divider'>
        <div className='articleListing'>
          <img src={this.props.image} className='resize' />
          <p className='col-sm-7'><a href={this.props.url}>{this.props.title}</a></p>
          <p className='col-sm-1 author'>{this.props.profile.first_name} {this.props.profile.last_name}</p>
          <p className='col-sm-1 words'>{this.props.words}</p>
          <p className='col-sm-1 submitted'>{this.props.publish_at}</p>
        </div>
      </div>
    )
  }
})

export default ArticleList
