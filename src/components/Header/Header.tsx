import React, {FC} from 'react'
import './Header.scss'
import {Avatar} from '../common/Avatar/Avatar'
import {Notification} from '../common/Notification/Notification'
import {TextLogo} from '../common/TextLogo/TextLogo'
import {Burger} from '../common/Burger/Burger'
import {Button} from '../common/Button/Button'
import {useCookies} from 'react-cookie'
import UserStore from '../../store/UserStore'
import {runInAction} from 'mobx'

type MyProps = {
    isOpenMenu: boolean
    setIsOpenMenu: (x:boolean) => void
}

export const Header:FC<MyProps> = ({isOpenMenu, setIsOpenMenu}) => {
    const [cookies, setCookies, removeCookie] = useCookies()
    const logout = () => {
        removeCookie('Auth-Token')
        runInAction(() => {
            UserStore.token = null
        })
    }
    return (
        <div className='header'>
            <Burger isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
            <TextLogo/>
            <Notification/>
            <Avatar url='https://cdnimg.rg.ru/i/gallery/e9f32f77/12_4967d989.jpg'/>
            <Button action={logout}>Выход</Button>
        </div>
    )
}