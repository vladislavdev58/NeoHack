import React, {useState} from 'react'
import './NotificationList.scss'
import {Card} from '../common/Card/Card'
import {NotificationCard} from '../NotificationCard/NotificationCard'
import {Button} from '../common/Button/Button'
import clsx from 'clsx'

export const NotificationList = () => {
    const [isShow, setIsShow] = useState(false)
    return (
        <Card className="notification-list">
            <div className="notification-list__header">
                <p className="notification-list__title">Подписки на уведомления</p>
                <Button action={() => setIsShow(!isShow)}>{isShow ? 'Закрыть' : 'Открыть'}</Button>
            </div>

            <div className={clsx('notification-list__items', !isShow && 'hide')}>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
            </div>
        </Card>
    )
}