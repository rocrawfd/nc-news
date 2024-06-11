import {useEffect, useState} from 'react'
import axios from 'axios'
import AddComment from './AddComment'
import DeleteComment from './DeleteComment'

function Comments(article_id, setCommentCount){

const [comments, setComments] = useState([])
const [user, setUser] = useState("cooljmessy");
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)

const articleId = article_id.article_id
    useEffect(() => {
    axios.get(`https://northcoders-news-app-ei5k.onrender.com/api/articles/${articleId}/comments`)
    .then(({data}) => {
        setLoading(false)
        setComments(data.comments)
    })
    .catch((err) => {
        setError(true)
    })
}, [])


if(loading){
    return <h1>loading...</h1>
}
if(error){
    return <h2>error loading comments...</h2>
}  

    return (
        <>
        <h2>Comments:</h2>
        <AddComment comments={comments} setComments={setComments}/>
        <ul>
            {comments.map((comment) => {
                if(user === comment.author){
                    return(
                        <li key={comment.comment_id} className="articleHome">
                            <p>{comment.body}</p>
                            <p>{comment.author} | Posted: {comment.created_at}</p>
                            <p>Votes: {comment.votes}</p>
                            <DeleteComment id={comment.comment_id} comments={comments} setComments={setComments} />
                        </li>
                    )
                }else{
                    return(
                        <li key={comment.comment_id} className="articleHome">
                            <p>{comment.body}</p>
                            <p>{comment.author} | Posted: {comment.created_at}</p>
                            <p>Votes: {comment.votes}</p>
                        </li>
                    )
                }
            })}
        </ul>
        </>
    )
}

export default Comments