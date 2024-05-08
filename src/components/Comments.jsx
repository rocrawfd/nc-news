import {useEffect, useState} from 'react'
import axios from 'axios'

function Comments(article_id){

const [comments, setComments] = useState([])

const articleId = article_id.article_id
    useEffect(() => {
    axios.get(`https://northcoders-news-app-ei5k.onrender.com/api/articles/${articleId}/comments`)
    .then(({data}) => {
        setComments(data.comments)
        console.dir(data.comments)
    })
}, [])

    return (
        <>
        <h2>Comments:</h2>
        <ul>
            {comments.map((comment) => {
                return(
                    <li key={comment.comment_id} className="articleHome">
                        <p>{comment.body}</p>
                        <p>{comment.author} | Posted: {comment.created_at}</p>
                        <p>Votes: {comment.votes}</p>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Comments