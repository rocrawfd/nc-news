import axios from 'axios'
import {useState, useEffect } from 'react'

function Searchbar({setArticles}) {
    const [topics, setTopics] = useState([])
    const [topic, setTopic] = useState()

    useEffect(() => {
        axios.get('https://northcoders-news-app-ei5k.onrender.com/api/topics')
        .then(({data}) => {
            console.log(data.topics[0].slug)
            setTopics(data.topics)
        })
    }, [])

    function handleSubmit(event){
        event.preventDefault()
        let axiosString = `https://northcoders-news-app-ei5k.onrender.com/api/articles`
        const newTopic = event.target[0].value
        topics.map((topic) => {
            if(topic.slug === newTopic)
                axiosString += `?topic=${newTopic}`
        })
            axios.get(axiosString)
            .then(({data}) => {
                setArticles(data.articles)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
        <label for="topic-selector">Choose a topic:</label>
        <select name="topic-selector">
            <option key="all-articles" value="all articles">all articles</option>
            {topics.map((topic) => {
                return (
                    <option key={topic.slug} value = {topic.slug}>{topic.slug}</option>
                )
            })}
        </select>
            <button>Submit</button>
        </form>

    )


}

export default Searchbar