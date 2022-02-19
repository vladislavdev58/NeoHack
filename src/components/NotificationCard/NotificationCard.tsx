import React from 'react'
import './NotificationCard.scss'

export const NotificationCard = () => {
    return (
        <div className='notification-card'>
            <p className='notification-card__title'>Bitcoin</p>
            <div className="">
                <p>ниже 6000</p>
                <p>выше 7000</p>
            </div>
        </div>
    )
}