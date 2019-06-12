import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul id="header">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/resorts'>Resorts</Link></li>
        <li><Link to='/forecasts'>Forecasts</Link></li>
        <li><Link to='/snowreports'>Snow Reports</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
