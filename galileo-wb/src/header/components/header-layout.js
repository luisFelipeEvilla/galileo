import React from 'react'
import '../../../assets/css/header/header-layout.css'

const Header = (props) => (
  <div className="header-layout">
    {props.children}
  </div>
)

export default Header
