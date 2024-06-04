import React from 'react'

export default function SortBy() {
  
  return (
    <form>
        <label for='sortby-selector'>Sort By:</label>
        <select name='sortby-selector' onChange={()=>{console.log('changed')}}>
          <option>date</option>
          <option>comments</option>
          <option>votes</option>
        </select>
    </form>
  )
}