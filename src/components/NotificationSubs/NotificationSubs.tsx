import React, {FC} from 'react'
import './NotificationSubs.scss'
import {Form, Formik} from 'formik'
import {Input} from '../common/Input/Input'
import {Button} from '../common/Button/Button'

type MyProps = {
    name: string
    isSubscribe: boolean
    isAll?: boolean
}

export const NotificationSubs: FC<MyProps> = ({name, isSubscribe = false, isAll = false}) => {
    return (
        <div className="notification-subs">
            <p className="notification-subs__title">{name}</p>
            <Formik
                validateOnBlur={false}
                validateOnChange={false}
                initialValues={{
                    max: '',
                    min: ''
                }}
                onSubmit={
                    values => {
                        if (isAll) {
                            if (isSubscribe) {
                                console.log('Отписываемся от всего')
                            } else {
                                console.log('Подписываемся на все')
                            }
                        } else {
                            if (isSubscribe) {
                                console.log('Отписался', values)
                            } else {
                                console.log('Подписался', values)
                            }
                        }
                    }
                }
            >
                <Form>
                    <Input placeholder="Максимум" type={'text'} name="max" theme="light"/>
                    <Input placeholder="Минимум" type={'text'} name="min" theme="light"/>
                    {!isSubscribe && <Button>Подписаться</Button>}
                    {isSubscribe && <Button>Отписаться</Button>}
                </Form>
            </Formik>

        </div>
    )
}