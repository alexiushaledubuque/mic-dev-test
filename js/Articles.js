import React from 'react'
import preload from '../public/articles.json'

const Articles = React.createClass({
  render () {
    return (
      <div>
        <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
      </div>
    )
  }
})

export default Articles
