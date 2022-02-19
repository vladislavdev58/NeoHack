import React from 'react'
import './NotificationList.scss'
import {Card} from '../common/Card/Card'
import {NotificationCard} from '../NotificationCard/NotificationCard'

export const NotificationList = () => {
    return (
        <Card className='notification-list'>
            <p className='notification-list__title'>Подписки на уведомления</p>

            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
        </Card>
    )
}