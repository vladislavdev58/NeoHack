import React, {FC} from 'react'
import logo from '../../../assets/images/logo.png'

type MyProps = {
    width: number
    height: number
}

export const LogoIcon:FC<MyProps> = ({width, height}) => {
    return (
        <img src={logo} alt="Logo" width={width} height={height}/>
    )
}
