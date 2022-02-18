import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import './Button.scss'

type MyProps = {
    action?: () => void
    link?: string
    disabled?: boolean
}

export const Button:FC<MyProps> = ({children, action, link, disabled = false}) => {

    if (action) {
        return (
            <button className='button' onClick={action} type='button' disabled={disabled}>{children}</button>
        )
    }

    if (link) {
        return (
            <Link to={link}>
                <button className='button' type='button' disabled={disabled}>{children}</button>
            </Link>
        )
    }

    return (
        <button className='button' type='submit' disabled={disabled}>{children}</button>
    )
}
