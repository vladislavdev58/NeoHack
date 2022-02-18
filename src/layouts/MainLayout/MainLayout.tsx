import React, {FC} from 'react'
import './MainLayout.scss'

export const MainLayout:FC = ({children}) => {
    return (
        <div className='main-layout'>
            {children}
        </div>
    )
}