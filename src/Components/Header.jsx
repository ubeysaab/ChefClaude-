import React from 'react'
import logo from "../../public/Chef Claude Icon.png"
function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="" />
      <h1> Chef Claude</h1>
    </header>
  )
}

export default Header