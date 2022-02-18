import React, {FC} from 'react'
import {MainLayout} from '../MainLayout/MainLayout'
import {Sidebar} from '../../components/Sidebar/Sidebar'
import './LayoutAsSidebar.scss'

export const LayoutAsSidebar: FC = ({children}) => {
    return (
        <MainLayout>
            <div className="layout-sidebar">
                <Sidebar/>
                {children}
            </div>
        </MainLayout>
    )
}