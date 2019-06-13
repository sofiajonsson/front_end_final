import React from 'react'

const Logout = (props) => {

  const isTokenSaved = () => {
    if (localStorage.getItem('HopCentricity_Token') !== null) {
      return true
    } else {
      return false
    }
  }

  return (
    <div>
      {isTokenSaved()?<button onClick={() => props.handleLogout()} className='ui button'>Logout</button>:null}
    </div>
  )

}

export default Logout
