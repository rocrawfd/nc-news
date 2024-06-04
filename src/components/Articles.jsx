import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllArticles } from '../../utils/utils'
import { useSearchParams } from 'react-router-dom'
import Searchbar from './Searchbar'
import SortBy from './SortBy'


function Articles({articles, setArticles}){

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()


    useEffect(() => {
      getAllArticles(searchParams)
        .then((response) => {
          setError(false)
          setLoading(false)
          setArticles(response.data.articles)
        })
        .catch((err) => {
          setError(true)
        })
    }, [searchParams] )

    if(error){
      return <p>Error</p>
    }
    if(loading){
      return <h2>Loading Articles...</h2>
    }

    return (
      <div>
      <Searchbar/>
      <SortBy/>
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
      </div>
    )
      
    }

export default Articles