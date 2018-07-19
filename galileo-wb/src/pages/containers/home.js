import React, { PureComponent } from 'react'
import HomeLayout from '../components/home-layout'
import Header from '../../header/containers/header'

class Home extends PureComponent {
  render()  {
    return (
      <HomeLayout>
        <Header
          links={this.props.data.links}
        />
      </HomeLayout>
    )
  }
}

export default Home
