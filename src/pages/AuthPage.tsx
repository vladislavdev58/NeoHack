import React from 'react'
import {MainLayout} from '../layouts/MainLayout'
import {FormLogin} from '../components/FormLogin/FormLogin'
import './AuthPage.scss'

export const AuthPage = () => {
    return (
        <MainLayout>
            <div className="auth-page">
                <FormLogin/>
            </div>
        </MainLayout>
    )
}