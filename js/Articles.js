import React, { Component } from 'react'
import dataToLoad from '../public/articles.json'
import ArticleList from './ArticleList'
import axios from 'axios'
// import getMoreArticles from './utils/helper.js'

class Articles extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 10,
      defaultCount: 10
    }
    this.data = dataToLoad
    this.data.size = Object.keys(this.data.news).length
    this.handleCount = this.handleCount.bind(this)
  }
  getInitialState () {
    return {
      newArticles: {}
    }
  }
  componentDidMount () {
    axios.get('../public/more-articles.json')
      .then((response) => {
        console.log('response', response)
        this.setState({newArticles: response.data.news})
      })
    .catch((error) => {
      console.error('axios error', error)
    })
  }
  handleCount () {
    let count = this.state.defaultCount
    count = count + this.state.count
    if (count <= this.data.size) {
      console.log('Current count is: ', count)
      this.setState({ count })
    } else {
      console.log('End of file. Add new articles to display')
      for (let i = 0; i < this.state.newArticles.length; i++) {
        console.log('new row: ', this.state.newArticles[i])
        this.data.push(this.state.newArticles[i])
      }
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
        <div className='loader'>
          <button type='button' onClick={this.handleCount} className='btn btn-block btn-primary'>Load Rows</button>
        </div>
      </div>
    )
  }
}

export default Articles
