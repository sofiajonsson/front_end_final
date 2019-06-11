import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes
	var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}
function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }

								About Got Snow
								Support
								Resources
								Account
            </div>
        </div>
    )
}

export default Footer
