import React, {FC, useEffect, useRef} from 'react'
import './NotificationDropdown.scss'

type MyProps = {
    data: string[]
    setIsShow: (x:boolean) => void
}

export const NotificationDropdown:FC<MyProps> = ({data, setIsShow}) => {
    const rootEl = useRef(null);
    useEffect(() => {
        // @ts-ignore
        const onClick = (e:any) => rootEl.current?.contains(e.target) || setIsShow(false);
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [setIsShow]);
    return (
        <div className='notification-dropdown' ref={rootEl}>
            {
                data.length ? (
                    data.map((item) =>
                        <div className='notification-dropdown__item'>{item}</div>
                    )
                    ) : <div className='notification-dropdown__item'>Новых уведомлений нет</div>

            }
        </div>
    )
}