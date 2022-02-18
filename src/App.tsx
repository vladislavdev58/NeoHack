import React from 'react'
import {AppRoutes} from './AppRoutes'
import { BrowserRouter } from "react-router-dom"

export const App = () => {
  return (
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
  )
}
