import React from 'react'
import './NotificationCard.scss'

type NotificationCardProps = {
    name: string
    min: number
    max: number
}

export const NotificationCard = ({name, min, max}: NotificationCardProps) => {
    return (
        <div className='notification-card'>
            <p className='notification-card__title'>{name}</p>
            <div className="">
                <p>ниже {min}</p>
                <p>выше {max}</p>
            </div>
        </div>
    )
}