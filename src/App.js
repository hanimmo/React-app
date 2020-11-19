import React from 'react'
import Header from '../src/Header/Header'
import Body from '../src/body/body'
import Footer from '../src/Footer/footer'
import About from '../src/About/about'
import Shop from '../src/Shop/shop'
import Nav from '../src/Nav/nav'
import Menu from '../src/Menu/menu'


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hanim Mohammed</h1>

        <Header/> 
        <Body/>
        <Footer/>
        <About/>
        <Shop/>
        <Nav/>
        <Menu/>
       



      </div>
    )
  }
}

export default App;
