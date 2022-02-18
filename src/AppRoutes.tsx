import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {AuthPage} from './pages/AuthPage'

export const AppRoutes = () => {
    const auth = false

    // Если авторизирован
    if (auth) {

    }

    // Если нет
    return (
        <Routes>
            <Route path="/" element={<AuthPage/>} />
        </Routes>
    )
}