import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./RowPost.css";
import axios from "../../../axios";
import {API_KEY, imageUrl } from "../../../Constants/Constants";

function RowPost(props) {

  const[movies,setMovies]=useState([])
  const[urlId,setUrl]=useState('')
  
  useEffect(() => {
    
      axios
        .get(props.url)
        .then((response) => {
          console.log(response.data);
       setMovies(response.data.results)
       
        }).catch((error)=>{
          console.log('error found');
        })
    },[]);

    const opts = {
      height: '390',
      width:' 100%',
      playerVars: {
       
        autoplay: 1,
      },};

const handleMovie=(id)=>{
console.log(id,'movieId');
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  console.log(response.data,'clickedmovie');
  if(response.data.results.length!==0){
    setUrl(response.data.results[0])
  }else{
    console.log('no results');
  }
})
}
  
  
      return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        
        {movies.map((item)=>(

        <img onClick={()=>handleMovie(item.id)}
          alt="poster"
          className={props.isSmall?'smallposter':'poster'}
          src={`${imageUrl+item.backdrop_path}`}
        />

        ))}
        
        </div>
       {urlId&&<YouTube videoId={urlId.key} opts={opts}  />} 
    </div>
  );
}

export default RowPost;
