import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Articles({articles, setArticles}){

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

    useEffect(() => {
        axios
        .get('https://northcoders-news-app-ei5k.onrender.com/api/articles')
        .then((response) => {
          setError(false)
          setLoading(false)
            setArticles(response.data.articles)
        })
        .catch((err) => {
          setError(true)
        })
    }, [] )

    if(error){
      return <p>Error</p>
    }
    if(loading){
      return <h2>Loading Articles...</h2>
    }

    return (
      <ul>
        {articles.map((article) => {
          return (
        <li key={article.article_id} className = 'articleHome'>
          <h2>{article.title}</h2>
          <p>{article.author} | {article.created_at}</p>
          <img src= {article.article_img_url}/>
          <Link to={`/articles/${article.article_id}`} >Read Article</Link>
        </li>
          )
        })}
        
      </ul>
    )
      
    }

export default Articles