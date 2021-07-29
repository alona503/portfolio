import './App.css'
import React from 'react'
import About from './components/About'
import Order from './components/Order'
import Projects from './components/Projects'
import Nav from './components/Nav'
import Notfound from './pages/Notfound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/projects" component={Projects} />
          <Route path="/Order" component={Order} />
          <Route component={Notfound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
