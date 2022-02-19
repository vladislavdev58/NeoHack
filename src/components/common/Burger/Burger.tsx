import React, {FC} from 'react'
import './Burger.scss'

type MyProps = {
    isOpenMenu: boolean
    setIsOpenMenu: (x:boolean) => void
}

export const Burger:FC<MyProps> = ({isOpenMenu, setIsOpenMenu}) => {
    return (
        <div className='burger' onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <span/>
            <span/>
            <span/>
        </div>
    )
}