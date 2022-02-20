import React, {useEffect, useState} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {AuthPage} from './pages/AuthPage/AuthPage'
import {DashboardPage} from './pages/DashboardPage/DashboardPage'
import {NotificationPage} from './pages/PersonalPage/NotificationPage'
import {useCookies} from 'react-cookie'
import UserStore from './store/UserStore'
import {observer} from 'mobx-react-lite'
import {runInAction} from 'mobx'

export const AppRoutes = observer(() => {
    const [cookies] = useCookies()
    useEffect(() => {
        if (cookies['Auth-Token']) {
            runInAction(() => {
                UserStore.token = cookies['Auth-Token']
            })
        }
    }, [cookies])
    // Если авторизирован
    if (UserStore.token) {
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
})