import React from 'react'
import './Header.scss'
import {Avatar} from '../common/Avatar/Avatar'
import {Notification} from '../common/Notification/Notification'
import {TextLogo} from '../common/TextLogo/TextLogo'

export const Header = () => {
    return (
        <div className='header'>
            <TextLogo/>
            <Notification num={9}/>
            <Avatar url='https://cdnimg.rg.ru/i/gallery/e9f32f77/12_4967d989.jpg'/>
        </div>
    )
}