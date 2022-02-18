import React, {FC} from 'react'
import './Card.scss'
import clsx from 'clsx'

type MyProps = {
    className?: string
}

export const Card:FC<MyProps> = ({children, className}) => {
    return (
        <div className={clsx('card', className)}>
            {children}
        </div>
    )
}