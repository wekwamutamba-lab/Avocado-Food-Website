import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import WhyUs from './Components/pages/WhyUs'
import Story from './Components/pages/Story'
import Products from './Components/pages/Products'
import Contact from './Components/pages/Contact'

export default () => (
  <div className='app'>
    <NavBar />
    <main>
      <Home />
      <About />
      <WhyUs />
      <Story />
      <Products />
      <Contact />
    </main>
  </div>
)
