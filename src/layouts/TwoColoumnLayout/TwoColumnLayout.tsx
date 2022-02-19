import React, {FC} from 'react'
import './TwoColumnLayout.scss'

type MyProps = {
    infoComponent: JSX.Element
}

export const TwoColumnLayout:FC<MyProps> = ({children, infoComponent}) => {
    return (
        <div className='two-column-layout'>
            {infoComponent}
            {children}
        </div>
    )
}