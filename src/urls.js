import { API_KEY } from './Constants/Constants';

export const genres = [
    {url:`discover/tv?api_key=${API_KEY}&with_networks=213`,
     title:'Netflix Originals ',  
    isSmall:false},
    
    {url:`trending/all/week?api_key=${API_KEY}&language=en-US`,
    title:'Trending ',
    isSmall:true},

    {url:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    title:'Comedy',
    isSmall:true},
   
    {url:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    title:'Actions',
    isSmall:true},
   
    {url:`discover/movie?api_key=${API_KEY}&with_genres=27`,
    title:'Horrer',
    isSmall:true},
   
    {url:`discover/movie?api_key=${API_KEY}&with_genres=10749`,
    title:'Romance',
    isSmall:true},
   
    {url:`discover/movie?api_key=${API_KEY}&with_genres=99`,
    title:'Documentaries',
    isSmall:true},


]

