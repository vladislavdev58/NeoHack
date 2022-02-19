import React, {FC} from 'react'
import './Sidebar.scss'
import {LogoIcon} from '../common/Icons/LogoIcon'
import {Link, NavLink} from 'react-router-dom'
import {DashboardIcon} from '../common/Icons/DashboardIcon'
import {NotificationIcon} from '../common/Icons/NotificationIcon'

export const Sidebar: FC = () => {

    return (
        <div className="sidebar">
            <div className='sidebar__logo'>
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
    )
}