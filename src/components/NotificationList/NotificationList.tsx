import React, {useEffect, useState} from 'react'
import './NotificationList.scss'
import {Card} from '../common/Card/Card'
import {NotificationCard} from '../NotificationCard/NotificationCard'
import {Button} from '../common/Button/Button'
import clsx from 'clsx'
import CoinStore from '../../store/CoinStore'
import {TypeNotification} from '../../types/TypeNotification'

export const NotificationList = () => {
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {
        CoinStore.getNotifications()
    }, [])
    return (
        <Card className="notification-list">
            <div className="notification-list__header">
                <p className="notification-list__title">Подписки на уведомления</p>
                <Button action={() => setIsShow(!isShow)}>{isShow ? 'Закрыть' : 'Открыть'}</Button>
            </div>

            <div className={clsx('notification-list__items', !isShow && 'hide')}>
                {CoinStore.notifications && CoinStore.notifications.map((item: TypeNotification) =>
                    <NotificationCard key={item._id} name={item.name} max={item.max} min={item.min}/>
                )}
            </div>
        </Card>
    )
}