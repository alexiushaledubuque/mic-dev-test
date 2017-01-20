// Routes configured intitally; however, routes aren't required for app

import React from 'react'
import Main from '../Main'
import Header from '../Header'
import Articles from '../Articles'
import { Route, IndexRoute } from 'react-router'

const routes = (
  <Route path='/' component={Main}>
    <Route path='/' component={Header} />
    <IndexRoute component={Articles} />
  </Route>
)

export default routes
