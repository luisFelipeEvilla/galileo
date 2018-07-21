import React, { PureComponent } from 'react'
import Contact from '../components/contact'
import Copyrigth from '../components/copyright'
import FooterLayout from '../components/footer-layout'
import Logo from '../components/image'
import AboutUs from '../components/aboutUs'
import Help from '../components/help'
import Comunity from '../components/comunity'

class Footer extends  PureComponent {
  render() {
    return (
      <FooterLayout>
        <div className="col1">
        <Logo
            className="logo"
            imgSrc="../../../assets/svg/logo.svg"
            Heigth={80}
            Width={100}
          />
        </div>
        <div className="col2">
          <AboutUs/>
          <Help/>
          <Comunity/>
        </div>
        <div className="col3">
          <Contact links={this.props.sociallinks}/>
          <Copyrigth/>
        </div> 
      </FooterLayout>
    )
  }
}

export default Footer
