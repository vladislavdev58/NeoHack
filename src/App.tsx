import React from 'react'
import {AppRoutes} from './AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import './scss/main.scss'
import {CookiesProvider} from 'react-cookie'
import {configure} from 'mobx'

configure({
    enforceActions: 'observed',
    computedRequiresReaction: true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
})

export const App = () => {
  return (
      <CookiesProvider>
          <BrowserRouter>
              <AppRoutes/>
          </BrowserRouter>
      </CookiesProvider>
  )
}
