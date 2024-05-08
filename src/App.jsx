import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Articles from './components/Articles'
import Article from './components/Article'
import Searchbar from './components/Searchbar'


function App() {
  const [articles, setArticles] = useState([])

  return (
    <>
    <div className="HomeArticles">
    <Header />
    <Searchbar />
      <Routes>
        <Route path = "/" element={
          <div>
            <Articles articles={articles} setArticles={setArticles}/>
          </div>
        }/>
        <Route path="/articles/:article_id" element={
          <Article articles={articles}/>
        }/>
      </Routes>
    </div>
    </>
  )
}

export default App
