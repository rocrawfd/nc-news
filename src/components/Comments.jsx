import {useEffect, useState} from 'react'
import axios from 'axios'
import AddComment from './AddComment'

function Comments(article_id){

const [comments, setComments] = useState([])
//article 34 has 10 comments visible but a comment count of 11
const articleId = article_id.article_id
    useEffect(() => {
    axios.get(`https://northcoders-news-app-ei5k.onrender.com/api/articles/${articleId}/comments`)
    .then(({data}) => {
        setComments(data.comments)
    })
}, [])


    return (
        <>
        <h2>Comments:</h2>
        <AddComment comments={comments} setComments={setComments}/>
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