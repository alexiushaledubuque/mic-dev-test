import React from 'react'
import preload from '../public/articles.json'
import ArticleList from './ArticleList'

console.log('This is an article: ', preload.news[0])

const Articles = React.createClass({
  render () {
    return (
      <div className='articles'>
        {preload.news.map((story) => {
          return (
            <ArticleList key={story.id} {...story} />
          )
        })}
        <button type='' className='btn btn-block btn-primary'>Load More</button>
      </div>
    )
  }
})

export default Articles
