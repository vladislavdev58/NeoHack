import React, {FC} from 'react'
import {MainLayout} from '../MainLayout/MainLayout'
import {Sidebar} from '../../components/Sidebar/Sidebar'
import './LayoutAsSidebar.scss'
import {Header} from '../../components/Header/Header'

export const LayoutAsSidebar: FC = ({children}) => {
    return (
        <MainLayout>
            <div className="layout-sidebar">
                <Sidebar/>
                <div className="layout-sidebar__content">
                    {/*<Header/>*/}
                    {children}
                </div>
            </div>
        </MainLayout>
    )
}