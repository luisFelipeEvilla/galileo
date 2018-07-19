import React, { Component } from 'react'
import HeaderLayout from '../Components/header-layout'
import Navigation from '../components/navigation.js'
import Logo from '../../icon/components/logo'

class Header extends Component {
  render() {
    return(
      <HeaderLayout>
        <Logo
          width={120}
          height={80}
        />
        <Navigation
          links={this.props.links}
        />
      </HeaderLayout>
    )
  }
}

export default Header
