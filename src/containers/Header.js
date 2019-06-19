import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (


<div className="ui secondary  menu" float="center">
<span>
  <Link to="/">
    <img src="https://image.flaticon.com/icons/png/512/51/51873.png" alt="home-icon" style={{width: 50, height: 50}}></img>
    </Link>
  <Link to="/user">
    <img src="https://previews.123rf.com/images/stas11/stas111803/stas11180300101/97139887-heart-icon-vector-illustration-linear-symbol-with-thin-outline-.jpg" alt="home-icon" style={{width: 50, height: 50}}></img>
  </Link>

</span>
</div>
)



export default Header
