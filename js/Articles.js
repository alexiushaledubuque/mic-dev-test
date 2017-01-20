import React, { Component } from 'react'
import dataToLoad from '../public/articles.json'
import ArticleList from './ArticleList'
import axios from 'axios'

class Articles extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 10,
      defaultCount: 10
    }
    this.data = dataToLoad
    this.size = Object.keys(this.data.news).length
    this.handleCount = this.handleCount.bind(this)
  }
  getInitialState () {
    return {
      newArticles: {},
      stopFlag: false,
      button: '',
      currentTableView: {}
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

    if (count <= this.size) {
      this.setState({ count })
    } else {
      if (!this.state.stopFlag) {
        let tempSize = Object.keys(this.data.news).length
        for (let i = 0; i < this.state.newArticles.length; i++) {
          this.data.news[tempSize + i] = this.state.newArticles[i]
        }
        this.size = Object.keys(this.data.news).length
        this.state.stopFlag = true
      } else {

      }
    }
  }
  render () {
    const count = this.state.count
    this.state.button = <button type='button' onClick={this.handleCount} className='btn btn-block btn-primary'>Load Rows</button>
    const showData = (item, index) => {
      return ((index < count) ? <ArticleList key={item.id} {...item} /> : '')
    }
    return (
      <div>
        {this.data.news.map(showData)}
        <div className='loader'>
          {this.state.button}
        </div>
      </div>
    )
  }
}

export default Articles
