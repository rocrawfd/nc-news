import React, { useState } from 'react'

export default function SortBy({searchParams, setSearchParams, topic, setTopic}) {

  const params = new URLSearchParams(window.location.search)

  function handleSortBy (e){
    const newSearchParams = {...searchParams, sort_by: e.target.value}
    const topicSearchParams = {...searchParams, topic: topic, sort_by: e.target.value}
    if(topic && topic !== 'all'){
      setSearchParams(topicSearchParams)
    }else{
      setSearchParams(newSearchParams)
    }
  }

  function handleOrder(e){
    let sortBy = 'created_at'
    let sortByParams = params.get('sort_by')
    if(sortByParams){
      sortBy = sortByParams
    }
    const newSearchParams = {...searchParams, sort_by: sortBy, order: e.target.value}
    const topicSearchParams = {...searchParams, sort_by: sortBy, topic: topic, order: e.target.value}
    if(topic && topic !== 'all'){
      setSearchParams(topicSearchParams)
    }else{
      setSearchParams(newSearchParams)
    }
  }
  
  return (
    <nav>
    <form>
        <label htmlFor='sortby-selector'>Sort By: </label>
        <select name='sortby-selector' onChange={(e)=>{handleSortBy(e)}}>
          <option value='created_at'>date</option>
          <option value='comment_count'>comments</option>
          <option value='votes'>votes</option>
        </select>
    </form>
    <form>
      <label htmlFor='order-selector'>Order: </label>
      <select name='order-selector' onChange={(e)=>{handleOrder(e)}}>
      <option value='desc'>descending</option>
      <option value='asc'>ascending</option>
      </select>
    </form>
    </nav>
  )
}