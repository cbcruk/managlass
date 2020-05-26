import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Board, Manga } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/board/:page">
          <Board />
        </Route>
        <Route path="/manga/:id">
          <Manga />
        </Route>
        <Redirect to="/board/1" />
      </Switch>
    </Router>
  )
}

export default App
