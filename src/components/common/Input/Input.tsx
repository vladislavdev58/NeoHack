import React, {FC} from 'react'
import {Field} from 'formik'

type MyProps = {
    placeholder: string
    value: string
}

export const Input: FC<MyProps> = (props) => {
    return (
        <div>
            <Field {...props}/>
        </div>
    )
}