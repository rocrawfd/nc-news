import { useEffect, useState } from "react"
import { postComment } from "../../utils/utils"
import { useParams } from 'react-router-dom'

function AddComment({comments, setComments}){
    const {article_id} = useParams()
    const [hidden, setHidden] = useState(true)
    const [className, setClassName] = useState("hidden")



    function handleSubmit(event){
        event.preventDefault()
        const commentText = event.target[0].value
        if(commentText.length !== 0){
            return postComment(article_id, 'cooljmessy', commentText)
            .then((newComment) => {
                setClassName("hidden")
                setComments([newComment, ...comments])
            })
          } else {setClassName("not-hidden")}
        }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="typeComment">Type Comment:</label>
            <input type="text" name="typeComment" id="typeComment" placeholder="type comment here..."/>
            <p className={className}>comment cannot be blank</p>
        <button>Add Comment</button>
        </form>
    )
}

export default AddComment