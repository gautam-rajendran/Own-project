import React, { Component } from 'react'
import {  BrowserRouter as Router , Route , Routes,  } from 'react-router-dom'
import './index.css'
import Navbar from './Navbar/Navbar'
import Home from './Homee/Home'
import Setting from './settingss/Setting'
import Profile from './Profile/Profile'
import Order from './order/Order'


class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='settings' element={<Setting/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='orders' element={<Order/>}/>
        </Routes>
        </Router>
       
      </>
    )
  }
}

export default App