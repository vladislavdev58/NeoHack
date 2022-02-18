import React from 'react'
import {MainLayout} from '../../layouts/MainLayout/MainLayout'
import {FormLogin} from '../../components/FormLogin/FormLogin'
import {FormRegistration} from '../../components/FormRegistration/FormRegistration'
import {Route, Routes} from 'react-router-dom'
import './AuthPage.scss'

export const AuthPage = () => {
    return (
        <MainLayout>
            <div className="auth-page">
                <Routes>
                    <Route path={'*'} element={<FormLogin/>}/>
                    <Route path={'registration'} element={<FormRegistration/>}/>
                </Routes>
            </div>
        </MainLayout>
    )
}