import React from 'react'
import {Card} from '../common/Card/Card'
import './FormLogin.scss'
import {Form, Formik} from 'formik'
import {TypeAuth} from '../../types/TypeAuth'
import {REQUIRED_FILED} from '../../variables'
import {Input} from '../common/Input/Input'
import {Button} from '../common/Button/Button'
import {Link} from 'react-router-dom'

export const FormLogin = () => {
    return (
        <Card className="auth-form">
            <h1 className="auth-form__title">Авторизация</h1>
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
                onSubmit={
                    (values) => {
                        console.log(values)
                    }
                }
            >
                {({errors}) => (
                    <Form>
                        <Input placeholder="E-mail" type="email" name="email" error={errors.email} theme="light"/>
                        <Input placeholder="Password" type="password" name="password" error={errors.password}
                               theme="light"/>
                        <Button>Вход</Button>
                    </Form>
                )}
            </Formik>
            <p>У вас нет аккаунта? <Link to='registration'>Зарегистрироваться</Link></p>
        </Card>
    )
}