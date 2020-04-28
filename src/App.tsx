import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Layout } from 'antd'
import { Board, Manga } from './pages'

function App() {
  return (
    <Layout>
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
    </Layout>
  )
}

export default App
