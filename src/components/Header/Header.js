import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux'

function Header() {
const theme = useSelector((state) => state.theme.value)
  return (
    <div className="header"  style={{color: theme}}>
      <h1>Speckle</h1>
    </div>
  )
}

export default Header
