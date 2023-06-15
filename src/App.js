import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './App.css';
import Hotels from './pages/Hotels';
import RoomTypes from './pages/RoomTypes';

function App () {
  return(
    <Router>
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
              <Routes>
                  <Route path="*" element={<div></div>} />
                  <Route exact path="/" element={< Hotels/>}/>
                  <Route exact path="/room-types" element={< RoomTypes/>} />
                  <Route exact path="/accommodations" element={<div></div>} />
              </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App;