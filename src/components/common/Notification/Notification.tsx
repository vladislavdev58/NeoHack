import React, {FC} from 'react'
import './Notification.scss'
import {NotificationIcon} from '../Icons/NotificationIcon'

type MyProps = {
    num: number
}

export const Notification:FC<MyProps> = ({num}) => {
    return (
        <div className='notification' data-number={num > 99 ? '99+' : num}>
            <NotificationIcon width={22} height={22}/>
        </div>
    )
}