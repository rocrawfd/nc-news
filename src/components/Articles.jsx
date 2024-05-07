import axios from 'axios'
import { useEffect, useState } from 'react'

function Articles({articles, setArticles}){

  const [title, setTitle] = useState('')

    useEffect(() => {
        axios
        .get('https://northcoders-news-app-ei5k.onrender.com/api/articles')
        .then((response) => {
            setArticles(response.data.articles)
        })
        .catch((err) => {
          console.dir(err, 'error!!!')
        })
    }, [] )

    return (
      <div>
        {articles.map((article) => {
          return (
            <>
        <ul key={article.article_id} className = 'articleHome'>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <img src= {article.article_img_url}/>
        </ul>
        </>
          )
        })}
        
      </div>
    )
      
    }

export default Articles