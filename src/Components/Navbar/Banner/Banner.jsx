import React, { useEffect, useState } from 'react'
import axios from '../../../axios'
import { API_KEY,imageUrl } from '../../../Constants/Constants'
import './Banner.css'

function Banner() {
 const[movie,setMovie]=useState()
useEffect(()=>{
 axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
  const randomIndex=Math.floor(Math.random()*response.data.results.length)
  console.log(response.data.results[randomIndex]);
  setMovie(response.data.results[randomIndex])
 })
},[])

  return (
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:'no images'})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:''}</h1>
       <div className='banner_buttons'>
       <button className='button'>Play</button>
       <button className='button'>My list</button>
       </div>
       <h1 className='description'>{movie?movie.overview:''}
       </h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner