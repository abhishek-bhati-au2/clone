import React from 'react';
// import logo from './logo.svg';
import './css/App.css';
import './css/props.css';
import './css/uifont.css';

//screens
import Header from './screens/header.js';
import Sidebar from './screens/sidebar.js';
import HomePage from './screens/home.js';
import Rightbar from './screens/rightbar.js';
function App() {
  return (
    <div className="App flex">
       <Header />
       <Sidebar />
       <div className="App-content flex">
       <HomePage />
      
       </div>
        <Rightbar />
    </div>
  );
}

export default App;
