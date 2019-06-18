import React from 'react'


// The Header creates links that can be used to navigate
// between routes.
const Header = () => (


<div className="ui secondary  menu" float="center">
  <a className="active item" href='/'>
    <img src="https://image.flaticon.com/icons/png/512/51/51873.png" alt="home-icon" style={{width: 50, height: 50}}></img>
  </a>
  <a className="active item" href='/user'>
    <img src="https://previews.123rf.com/images/stas11/stas111803/stas11180300101/97139887-heart-icon-vector-illustration-linear-symbol-with-thin-outline-.jpg" alt="home-icon" style={{width: 50, height: 50}}></img>
  </a>
</div>
)



export default Header
