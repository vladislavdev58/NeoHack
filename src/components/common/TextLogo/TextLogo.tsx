import React, {FC} from 'react'
import './TextLogo.scss'
import clsx from 'clsx'

type MyProps = {
    isCentering?: boolean
    isSpaceBottom? : boolean
}

export const TextLogo:FC<MyProps> = ({isCentering = false, isSpaceBottom = false}) => {
    return (
        <div className={clsx('text-logo', isCentering && 'text-logo_text-center', isSpaceBottom && 'text-logo_space-bottom')}><span className='text-logo__gradient'>RateCoin</span>🚀</div>
    )
}