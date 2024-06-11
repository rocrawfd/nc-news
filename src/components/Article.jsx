import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Comments from './Comments'
import { upvoteArticle } from '../../utils/utils'

function Article(){

    const [article, setArticle] = useState([])
    const [votes, setVotes] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [commentCount, setCommentCount] = useState()
    const [errorMsg, setErrorMsg] = useState('Unknown Error')

    let count = 0

    const {article_id} = useParams()
    useEffect(()=>{
        axios.get(`https://northcoders-news-app-ei5k.onrender.com/api/articles/${article_id}`)
        .then(({data}) => {
            const article = data.article
            setLoading(false)
            setError(false)
            setArticle(article)
            setVotes(article.votes)
            setCommentCount(article.comment_count)
            count = article.votes
        })
        .catch((err) => {
            setErrorMsg(err.response.data.msg)
            setError(true)
            setLoading(false)
        })
    }, [])


    if(loading){
        return <h2>loading...</h2>
    }
    if(error){
        return <h2>error loading article: {errorMsg}</h2>
    }  


    function handleUpvote(event){
        event.preventDefault()
        setVotes(votes => votes + 1)
        upvoteArticle(article_id, 1)
    }
    function handleDownvote(event){
        event.preventDefault()
        setVotes(votes => votes - 1)
        upvoteArticle(article_id, -1)
    }


    return (
        <>
        <div className="articleHome">
        <h1>{article.title}</h1>
        <h2>Written by {article.author} on {article.created_at}</h2>
        <h3>Topic: {article.topic}</h3>
        <img src={article.article_img_url}/>
        <p>{article.body}</p>
        <h4>votes: {votes} | comments: {commentCount}</h4>
        <button onClick={handleUpvote} >Vote for Article</button>
        <button onClick={handleDownvote} >Dislike</button>
        </div>
        <Comments article_id={article_id}/>
        </>
    )
}

export default Article