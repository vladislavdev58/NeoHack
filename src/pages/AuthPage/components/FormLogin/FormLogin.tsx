import React, {useState} from 'react'
import {Card} from '../../../../components/common/Card/Card'
import {Form, Formik, FormikHelpers} from 'formik'
import {TypeAuth} from '../../../../types/TypeAuth'
import {REQUIRED_FILED} from '../../../../variables'
import {Input} from '../../../../components/common/Input/Input'
import {Button} from '../../../../components/common/Button/Button'
import {Link} from 'react-router-dom'
import {TextLogo} from '../../../../components/common/TextLogo/TextLogo'
import axios from 'axios'
import {API_HEADERS, ROUTES_PREFIX} from '../../../../config/api.config'
import {useCookies} from 'react-cookie'

export const FormLogin = () => {
    const [errorMsg, setErrorMsg] = useState('')
    const [cookies, setCookies] = useCookies()
    const submitHandle = (values: TypeAuth, actions: FormikHelpers<TypeAuth>) => {
        axios.post(`${ROUTES_PREFIX}/auth/login`, {email: values.email, password: values.password}, {
            headers: {
                ...API_HEADERS
            }
        })
            .then(r => {
                if (r.data.token) {
                    setCookies('Auth-Token', r.data.token, {path: '/'})
                }
            })
            .catch((err: any) => {
                if (err.response.data.errors) {
                    err.response.data.errors.forEach((err: any) => {
                        actions.setFieldError(err.param, err.msg)
                    })
                }
                else if (err.response.data.message) {
                    setErrorMsg(err.response.data.message)
                }
            })
    }
    return (
        <Card className="auth-page__form">
            <TextLogo isCentering={true} isSpaceBottom={true}/>
            <h1 className="auth-page__title">Авторизация</h1>
            <Formik
                validateOnBlur={false}
                validateOnChange={false}
                initialValues={{
                    email: '',
                    password: ''
                }}
                validate={
                    values => {
                        const errors: Partial<TypeAuth> = {}
                        if (!values.email) errors.email = REQUIRED_FILED
                        if (!values.password) errors.password = REQUIRED_FILED
                        return errors
                    }
                }
                onSubmit={submitHandle}>
                {({errors}) => (
                    <Form>
                        <Input placeholder="E-mail" type="email" name="email" error={errors.email} theme="light"/>
                        <Input placeholder="Пароль" type="password" name="password" error={errors.password} theme="light"/>
                        {errorMsg && <p className='message_error'>{errorMsg}</p>}
                        <Button>Вход</Button>
                    </Form>
                )}
            </Formik>
            <p>У вас нет аккаунта? <Link to='registration'>Зарегистрироваться</Link></p>
        </Card>
    )
}