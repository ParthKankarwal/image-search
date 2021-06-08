import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar'
import ImageMenu from './Components/ImageMenu'
import ImageShow from './Components/ImageShow'
import './Components/main.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchBar/>
        <ImageMenu/> 

      </div>
    </div>
  );
}

export default App;
