import React, {FC} from 'react'
import './Sidebar.scss'
import {LogoIcon} from '../common/Icons/LogoIcon'
import {Link, NavLink} from 'react-router-dom'
import {DashboardIcon} from '../common/Icons/DashboardIcon'
import {NotificationIcon} from '../common/Icons/NotificationIcon'
import clsx from 'clsx'

type MyProps = {
    isOpenMenu: boolean
    setIsOpenMenu: (x: boolean) => void
}

export const Sidebar: FC<MyProps> = ({isOpenMenu, setIsOpenMenu}) => {
    return (
        <>
            <div className={clsx('sidebar', isOpenMenu && 'sidebar_show')}>
                <div className="sidebar__logo">
                    <Link to="/">
                        <LogoIcon width={64} height={64}/>
                    </Link>
                </div>

                <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/">
                    <DashboardIcon width={32} height={32}/>
                </NavLink>

                <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/notification">
                    <NotificationIcon width={32} height={32}/>
                </NavLink>
            </div>
            <div className={clsx('sidebar-overlay', isOpenMenu && 'sidebar-overlay_show')}
                 onClick={() => setIsOpenMenu(false)}/>
        </>
    )
}