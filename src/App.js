import React from 'react'
import './App.css';
import Banner from './Components/Navbar/Banner/Banner';
import Navbar from './Components/Navbar/Navbar'
import {actions,originals,comedy,horrer,romance,trending,documentaries} from './urls'
import './Components/Navbar/Navbar.css'
import RowPost from './Components/Navbar/RowPost/RowPost';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={trending} title='Trending' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={actions} title='Actions' isSmall />
      
      <RowPost url={horrer} title='Horrer' isSmall />
     
      <RowPost url={documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
