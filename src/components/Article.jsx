import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Comments from './Comments'

function Article({articles}){

    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    const {article_id} = useParams()
    useEffect(()=>{
        axios.get(`https://northcoders-news-app-ei5k.onrender.com/api/articles/${article_id}`)
        .then(({data}) => {
            setLoading(false)
            setError(false)
            const article = data.article
            setArticle(article)
        })
        .catch((err) => {
            setError(true)
        })
    }, [])

    if(loading){
        return <h1>loading...</h1>
    }
    if(error){
        return <h1>error loading article...</h1>
    }

    return (
        <>
        <div className="articleHome">
        <h1>{article.title}</h1>
        <h2>Written by {article.author} on {article.created_at}</h2>
        <h3>Topic: {article.topic}</h3>
        <img src={article.article_img_url}/>
        <p>{article.body}</p>
        <h4>votes: {article.votes} | comments: {article.comment_count}</h4>
        </div>
        <Comments article_id={article_id}/>
        </>
    )
}

export default Article