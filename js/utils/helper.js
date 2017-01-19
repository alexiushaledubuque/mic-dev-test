import axios from 'axios'

export default function getMoreArticles () {
  return axios.get('../public/more-articles.json')
    .then((response) => ({moreArticles: response.data}))
}
