import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import comicPage from './comicPage';

export default function App() {
  return (
    <Switch>
      <Route path="/:id" component={comicPage} />
      <Route path="" component={comicPage} />
    </Switch>
  )
}