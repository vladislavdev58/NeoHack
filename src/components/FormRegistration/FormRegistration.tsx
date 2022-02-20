import React from 'react'
import {Form, Formik, FormikHelpers} from 'formik'
import {TypeAuth} from '../../types/TypeAuth'
import {REQUIRED_FILED} from '../../variables'
import {Input} from '../common/Input/Input'
import {Button} from '../common/Button/Button'
import {Link} from 'react-router-dom'
import {Card} from '../common/Card/Card'
import {TextLogo} from '../common/TextLogo/TextLogo'
import {register} from '../../services/registration.services'

export const FormRegistration = () => {
    const submitHandle = (values: TypeAuth, actions: FormikHelpers<TypeAuth>) => {
        console.log(values)
        register(values.email, values.password)
            .then((r: any) => {
                console.log(r.errors)
            })
            .catch((err: any) => {
                console.log(err.response.data)
                if (err.response.data.errors) {
                    err.response.data.errors.forEach((err: any) => {
                        actions.setFieldError(err.param, err.msg)
                    })
                }
                else if (err.response.data.message) {
                    alert(err.response.data.message)
                }
            })
    }
    return (
        <Card className="auth-page__form">
            <TextLogo isCentering={true} isSpaceBottom={true}/>
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
                    (values, actions) => submitHandle(values, actions)
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