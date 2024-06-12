import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllArticles } from "../../utils/utils";
import { useSearchParams } from "react-router-dom";
import Searchbar from "./Searchbar";
import SortBy from "./SortBy";
import dayjs from 'dayjs'

function Articles({ articles, setArticles }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [topic, setTopic] = useState('all')
  const [errorMsg, setErrorMsg] = useState('Unknown Error')

  useEffect(() => {
    getAllArticles(searchParams)
      .then((response) => {
        setError(false);
        setLoading(false);
        setArticles(response.data.articles);
        const params = new URLSearchParams(window.location.search)
        const topicParam = params.get('topic')
        if(topicParam){
          setTopic(topicParam)
        }else{setTopic('all')}
      })
      .catch((err) => {
        setError(true);
        setErrorMsg(err.response.data.msg)
      });
  }, [searchParams]);

  if (error) {
    return <p>Error loading articles: {errorMsg}</p>;
  }
  if (loading) {
    return <h2>Loading Articles...</h2>;
  }

  return (
    <div>
      <Searchbar searchParams={searchParams} setSearchParams={setSearchParams}/>
      <SortBy searchParams={searchParams} setSearchParams={setSearchParams} topic={topic} setTopic={setTopic}/>
      <p>you are viewing {topic} articles</p>
      <ul>
        {articles.map((article) => {
          return (
            <Link className='articleCard' to={`/articles/${article.article_id}`}>
              <li key={article.article_id} className="articleHome">
                <h2>{article.title}</h2>
                <p>
                  {article.author} | { dayjs(article.created_at).format("DD-MMM-YYYY")}
                </p>
                <img src={article.article_img_url} />
                <p>Votes: {article.votes} Comments: {article.comment_count} </p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Articles;
