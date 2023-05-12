import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <ul className="headerlist">
            <li className="headeritems"><Link className='link' to='/home'>Home</Link></li>
            <li className="headeritems"><Link className='link'to='./settings'>Settings</Link></li>
            <li className="headeritems"><Link className='link'to='./orders'>Orders</Link></li>
            <li className="headeritems"><Link className='link' to='./profile'>Profile</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navbar