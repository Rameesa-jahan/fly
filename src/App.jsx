import React from 'react'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import Support from './Components/Support'
import Info from './Components/Info'
import Lounge from './Components/Lounge'
import Travelers from './Components/Travelers'
import Subscribe from './Components/Subscribe'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <Search/>
      <Support/>
      <Info />
      <Lounge/>
      <Travelers/>
      <Subscribe />
      <Footer/>
    </div>
  )
}

export default App

