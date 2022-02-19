import React, {useState} from 'react'
import './Notification.scss'
import {NotificationIcon} from '../Icons/NotificationIcon'
import {NotificationDropdown} from '../NotificationDropdown/NotificationDropdown'

export const Notification = () => {
    const [isShow, setIsShow] = useState(false)

    const data:string[] = ['hello']
    const num = data.length

    return (
        <div className='notification' data-number={num > 99 ? '99+' : num}>
            <div className="notification__icon" onClick={() => setIsShow(!isShow)}>
                <NotificationIcon width={22} height={22}/>
            </div>
            {isShow && <NotificationDropdown data={data} setIsShow={setIsShow}/>}
        </div>
    )
}