import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { connect } from 'react-redux'
import Home from './portfolio/Home'
import About from './portfolio/about/About'
import Work from './portfolio/work/Work'
import Contact from './portfolio/contact/Contact'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

