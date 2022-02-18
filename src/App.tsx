import React from 'react'
import {AppRoutes} from './AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import './scss/main.scss'

export const App = () => {
  return (
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
  )
}
