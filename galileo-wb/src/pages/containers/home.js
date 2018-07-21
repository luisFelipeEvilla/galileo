import React, { PureComponent } from 'react'
import HomeLayout from '../components/home-layout'
import Header from '../../header/containers/header'
import Footer from '../../footer/containers/footer'

class Home extends PureComponent {
  render()  {
    console.log(this.props.data.headerLinks)
    return (
      <HomeLayout>
        <Header
          links={this.props.data.headerLinks}
        />
        <div className="content">hello world!!! </div>
        <Footer 
          sociallinks={this.props.data.footerSocialLinks}
        />
      </HomeLayout>
    )
  }
}

export default Home
