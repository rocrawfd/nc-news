import axios from 'axios'
import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTopics } from '../../utils/utils'

function Searchbar() {
    const [topics, setTopics] = useState([])
    const [topic, setTopic] = useState()

    useEffect(() => {
        getTopics()
        .then(({data}) => {
            setTopics(data.topics)
        })
    }, [])

        return (
            <ul className='flatlist'>
                <li key='all-articles'>
                    <Link to={'/'}>
                        <h2 className='topicList'>all articles</h2>
                    </Link>
                </li>
                {topics.map((topic) => {
                    return (
                        <li key={topic.slug}>
                        <Link to={`/?topic=${topic.slug}`}>
                            <h2 className='topicList'> {topic.slug} </h2>
                        </Link>
                        </li>
                    )
                })}
            </ul>
        )
}

export default Searchbar