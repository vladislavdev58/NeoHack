import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {AuthPage} from './pages/AuthPage/AuthPage'

export const AppRoutes = () => {
    const auth = false

    // Если авторизирован
    if (auth) {

    }

    // Если нет
    return (
        <Routes>
            <Route path="*" element={<Navigate replace to="/auth"/>}/>
            <Route path="auth/*" element={<AuthPage/>}/>
        </Routes>
    )
}