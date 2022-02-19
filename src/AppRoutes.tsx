import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {AuthPage} from './pages/AuthPage/AuthPage'
import {DashboardPage} from './pages/DashboardPage/DashboardPage'
import {NotificationPage} from './pages/PersonalPage/NotificationPage'

export const AppRoutes = () => {
    const auth = false

    // Если авторизирован
    if (auth) {
        return (
            <Routes>
                <Route path="/" element={<DashboardPage/>}/>
                <Route path="/notification" element={<NotificationPage/>}/>
                <Route path="*" element={<Navigate replace to="/"/>}/>
            </Routes>
        )
    }

    // Если нет
    return (
        <Routes>
            <Route path="*" element={<Navigate replace to="/auth"/>}/>
            <Route path="auth/*" element={<AuthPage/>}/>
        </Routes>
    )
}