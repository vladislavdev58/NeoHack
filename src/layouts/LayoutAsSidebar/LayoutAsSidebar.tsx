import React, {FC, useEffect, useState} from 'react'
import {MainLayout} from '../MainLayout/MainLayout'
import {Sidebar} from '../../components/Sidebar/Sidebar'
import './LayoutAsSidebar.scss'
import {Header} from '../../components/Header/Header'
import clsx from 'clsx'

export const LayoutAsSidebar: FC = ({children}) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    useEffect(() => {
        if (isOpenMenu) {
            document.body.classList.add('block')
        } else {
            document.body.classList.remove('block')
        }
    }, [isOpenMenu])

    return (
        <MainLayout>
            <div className={clsx('layout-sidebar', !isOpenMenu && 'layout-sidebar__hide-menu')}>
                <Sidebar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
                <div className="layout-sidebar__content">
                    <Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
                    {children}
                </div>
            </div>
        </MainLayout>
    )
}