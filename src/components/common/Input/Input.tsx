import React, {FC} from 'react'
import {Field} from 'formik'
import clsx from 'clsx'
import './Input.scss'

type MyProps = {
    placeholder: string
    type: 'text' | 'email' | 'password'
    name: string
    error?: string
    disabled?: boolean
    theme?: 'light' | 'dark'
}

export const Input: FC<MyProps> = ({
                                       placeholder,
                                       type,
                                       name,
                                       error,
                                       disabled = false,
                                       theme = 'dark'
                                   }) => {
    return (
        <div className='input'>
            <Field placeholder={placeholder} type={type} name={name} disabled={disabled}
                   className={clsx('input__field', theme === 'light' && 'input__field_light',error && 'input__field_error')}/>
            {error && <p className="message_error">{error}</p>}
        </div>
    )
}