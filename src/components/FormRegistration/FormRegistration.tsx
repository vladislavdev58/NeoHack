import React from 'react'
import {Form, Formik} from 'formik'
import {TypeAuth} from '../../types/TypeAuth'
import {REQUIRED_FILED} from '../../variables'
import {Input} from '../common/Input/Input'
import {Button} from '../common/Button/Button'
import {Link} from 'react-router-dom'
import {Card} from '../common/Card/Card'

export const FormRegistration = () => {
    return (
        <Card className="auth-page__form">
            <h1 className="auth-page__title">Регистрация</h1>
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
                        <Input placeholder="Ваше имя" type="text" name="name" error={errors.email} theme="light"/>
                        <Input placeholder="E-mail" type="email" name="email" error={errors.email} theme="light"/>
                        <Input placeholder="Пароль" type="password" name="password" error={errors.password}
                               theme="light"/>
                        <Button>Зарегистрироваться</Button>
                    </Form>
                )}
            </Formik>
            <p>У вас есть аккаунт? <Link to='/auth'>Войти</Link></p>
        </Card>
    )
}