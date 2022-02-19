import React, {FC} from 'react'
import './Header.scss'
import {Avatar} from '../common/Avatar/Avatar'
import {Notification} from '../common/Notification/Notification'
import {TextLogo} from '../common/TextLogo/TextLogo'
import {Burger} from '../common/Burger/Burger'

type MyProps = {
    isOpenMenu: boolean
    setIsOpenMenu: (x:boolean) => void
}

export const Header:FC<MyProps> = ({isOpenMenu, setIsOpenMenu}) => {
    return (
        <div className='header'>
            <Burger isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
            <TextLogo/>
            <Notification num={9}/>
            <Avatar url='https://cdnimg.rg.ru/i/gallery/e9f32f77/12_4967d989.jpg'/>
        </div>
    )
}