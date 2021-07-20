import './App.css'
import React from 'react'
import About from './components/About'
import Qa from './components/Qa'
import Web from './components/Web'
import Nav from './components/Nav'
import Notfound from './pages/Notfound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
      </div>
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/qa" component={Qa} />
        <Route path="/web" component={Web} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
