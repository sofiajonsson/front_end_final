import React from 'react'


// The Header creates links that can be used to navigate
// between routes.
const Header = () => (


<div className="ui secondary  menu">
  <a className="active item" href='/'>
    Home
  </a>
  <a className="item" href='/user'>
    Favorites
  </a>
  <div className="right menu">
    <div className="item">
    <a className="item" href='/login'>
      Account
    </a>
    </div>
    <a className="ui item">
      Logout
    </a>
  </div>
</div>
)



export default Header
