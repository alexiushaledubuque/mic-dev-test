import React from 'react'
import preload from '../public/articles.json'
// import ArticleList from './ArticleList'

console.log('This is an article: ', preload.news[0])

const Articles = React.createClass({
  render () {
    return (
      <div className='articles'>
        <ul className='list-group'>
          {preload.news.map((story, index) => {
            return (
              <div>
                <div className='articleListing'>
                  <li className='list-group-item' key={index}>
                    <img src={story.image} className='resize' />
                    <h5><a href={story.url}>{story.title}</a></h5>
                    <h5>{story.profile.first_name} {story.profile.last_name}</h5>
                    <h5>{story.words}</h5>
                    <h5>{story.publish_at}</h5>
                  </li>
                </div>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
})

export default Articles
