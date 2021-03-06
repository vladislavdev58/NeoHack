import React, {FC, useState} from 'react'
import './NotificationSubs.scss'
import {Form, Formik} from 'formik'
import {Input} from '../common/Input/Input'
import {Button} from '../common/Button/Button'
import axios from 'axios'
import {API_HEADERS, ROUTES_PREFIX} from '../../config/api.config'
import UserStore from '../../store/UserStore'
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
            max: values.max,
            parent: id
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
        axios.delete(`${ROUTES_PREFIX}/events/${id}`, {
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
                        <Button action={unsubscribeHandle}>????????????????????</Button>
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
                                if (values.min <= 0) errors.min = '?????????????? ?????????? ???????????? ????????'
                                if (values.max <= 0) errors.max = '?????????????? ?????????? ???????????? ????????'
                                return errors
                            }
                        }
                        onSubmit={subscribeHandle}>
                        {({errors}) => (
                            <Form>
                                <div className="notification-subs__wrap">
                                    <div>
                                        <label htmlFor="">??????????????</label>
                                        <Input placeholder="??????????????" type={'number'} name="min" theme="light" error={errors.min}/>
                                    </div>
                                    <div>
                                        <label htmlFor="">????????????????</label>
                                        <Input placeholder="????????????????" type={'number'} name="max" theme="light" error={errors.max}/>
                                    </div>
                                </div>

                                {errorMsg && <p className='message_error'>{errorMsg}</p>}
                                <Button>??????????????????????</Button>
                            </Form>
                        )}
                    </Formik>
            }
        </div>
    )
})