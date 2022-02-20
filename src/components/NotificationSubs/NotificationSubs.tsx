import React, {FC, useState} from 'react'
import './NotificationSubs.scss'
import {Form, Formik, FormikHelpers} from 'formik'
import {Input} from '../common/Input/Input'
import {Button} from '../common/Button/Button'
import axios from 'axios'
import {API_HEADERS, ROUTES_PREFIX} from '../../config/api.config'
import UserStore from '../../store/UserStore'
import {TypeAuth} from '../../types/TypeAuth'
import CoinStore from '../../store/CoinStore'
import {TypeNotification} from '../../types/TypeNotification'
import {observer} from 'mobx-react-lite'
import {runInAction} from 'mobx'

type MyProps = {
    name: string
    isSubscribe: boolean
    isAll?: boolean
    id: string
}

export const NotificationSubs: FC<MyProps> = observer(({
    name,
    isSubscribe = false,
    isAll = false,
    id
}) => {
    const [errorMsg, setErrorMsg] = useState('')
    const subscribeHandle = (values: {max: number, min: number}) => {
        setErrorMsg('')
        axios.post(`${ROUTES_PREFIX}/events`, {
            name,
            min: values.min,
            max: values.max
        }, {
            headers: {
                ...API_HEADERS,
                'Authorization': `Bearer ${UserStore.token}`
            }
        })
            .then(r => {
                console.log(r)
                CoinStore.getNotifications()
            })
            .catch(err => {
                console.log(err)
                if (err.response.data.message) {
                    console.log(err.response.data.message)
                    setErrorMsg(err.response.data.message)
                }
            })
    }
    const unsubscribeHandle = () => {
        axios.delete(`${ROUTES_PREFIX}/events`, {
            params: {
                _id: id
            },
            headers: {
                ...API_HEADERS,
                'Authorization': `Bearer ${UserStore.token}`
            }
        })
            .then(r => {
                console.log(r)
                runInAction(() => {
                    CoinStore.notifications = r.data.events
                })
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="notification-subs">
            <p className="notification-subs__title">{name}</p>
            {CoinStore.notifications.find((item: TypeNotification) => item.name === name)
                ?
                    <div>
                        <Button action={unsubscribeHandle}>Отписаться</Button>
                    </div>
                :
                    <Formik
                        validateOnBlur={false}
                        validateOnChange={false}
                        initialValues={{
                            max: 0,
                            min: 0
                        }}
                        validate={
                            values => {
                                const errors: Partial<{max: string, min: string}> = {}
                                if (values.min <= 0) errors.min = 'Введите число больше нуля'
                                if (values.max <= 0) errors.max = 'Введите число больше нуля'
                                return errors
                            }
                        }
                        onSubmit={subscribeHandle}>
                        {({errors}) => (
                            <Form>
                                <Input placeholder="Минимум" type={'number'} name="min" theme="light" error={errors.min}/>
                                <Input placeholder="Максимум" type={'number'} name="max" theme="light" error={errors.max}/>
                                {errorMsg && <p className='message_error'>{errorMsg}</p>}
                                <Button>Подписаться</Button>
                            </Form>
                        )}
                    </Formik>
            }
        </div>
    )
})