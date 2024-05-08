import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Articles from './components/Articles'
import Searchbar from './components/Searchbar'
import {Routes, Route} from "react-router-dom"


function App() {

  const [articles, setArticles] = useState([])

  return (
    <div className="HomeArticles">
      <Header />
      <Searchbar />
      <Articles articles={articles} setArticles={setArticles}/>
    </div>
  )
}

export default App
