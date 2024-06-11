import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Articles from './components/Articles'
import Article from './components/Article'
import Error from './components/Error'


function App() {
  const [articles, setArticles] = useState([])

  return (
    <div className="HomeArticles">
    <Header />
      <Routes>
        <Route path = "/" element={
          <div>
            <Articles articles={articles} setArticles={setArticles}/>
          </div>
        }/>
        <Route path="/articles/:article_id" element={
          <Article />
        }/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
