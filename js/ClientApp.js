import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Router } from 'react-router'

import AppRoutes from './config/routes'

render(<Router history={hashHistory}>{AppRoutes}</Router>, document.getElementById('app'))
