import axios from 'axios'

const ncNewsApi = axios.create({
    baseURL: "https://northcoders-news-app-ei5k.onrender.com/api"
})


export function upvoteArticle(article_id, vote){
    return ncNewsApi.patch(`/articles/${article_id}`, { inc_votes: vote })
    .then(({data}) => {
        return data.article
    })
}

export function postComment(article_id, username, body){
    return ncNewsApi.post(`/articles/${article_id}/comments`, {username: username, body: body})
    .then(({data}) => {
        return data.comment
    })
}

export function deleteComment(comment_id){
    return ncNewsApi.delete(`/comments/${comment_id}`)
    .then((response) => {
        return response.status
    })
}