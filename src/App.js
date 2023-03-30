import React from 'react'
import './App.css';
import Banner from './Components/Navbar/Banner/Banner';
import Navbar from './Components/Navbar/Navbar'
import {genres} from './urls'
import './Components/Navbar/Navbar.css'
import RowPost from './Components/Navbar/RowPost/RowPost';


function App() {

   return (
    <div className="App">
      <Navbar />
      <Banner />

     {genres.map((item)=>{
      return(
        <RowPost url={item.url} title={item.title} isSmall={item.isSmall} />
      )
     })}
     
    </div>
  );
}

export default App;
