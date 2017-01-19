import React, { Component } from 'react'
import dataToLoad from '../public/articles.json'
import ArticleList from './ArticleList'

class Articles extends Component {
  constructor () {
    super()
    this.data = dataToLoad
    this.data.size = Object.keys(this.data.news).length
    this.state = {
      count: 10,
      defaultCount: 10
    }
    this.handleCount = this.handleCount.bind(this)
  }
  handleCount () {
    let count = this.state.defaultCount
    count = count + this.state.count
    if (count <= this.data.size) {
      console.log('Current count is: ', count)
      this.setState({ count })
    } else {
      console.log('End of file')
    }
  }
  render () {
    const count = this.state.count
    const showData = (item, index) => {
      return ((index < count) ? <ArticleList key={item.id} {...item} /> : '')
    }
    return (
      <div>
        {this.data.news.map(showData)}
        <button type='button' onClick={this.handleCount} className='btn btn-block btn-primary loader'>Load Rows</button>
      </div>
    )
  }
}

export default Articles
