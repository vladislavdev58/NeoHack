import React, {FC} from 'react'
import './Avatar.scss'

type MyProps = {
    url: string
}

export const Avatar:FC<MyProps> = ({url}) => {
    return (
        <div className='avatar'>
            <img src={url} alt="avatar"/>
        </div>
    )
}