'use client'
import React, {FC} from "react";
import {setCookie} from "nookies";
import {Button, Checkbox, Form, Input, notification, Radio, Select} from "antd";
import * as Api from '@/_api'

const {Option} = Select;

type fullForm = {
    email: string,
    first_name: string,
    second_name: string,
    login: string,
    password: string,
    pass: string,
    gender: string,
    yo: string,
    rules: boolean,
}

const RegisterForm: FC = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const onSubmit = async (values: fullForm) => {
        try {
            const {pass, yo, rules, ...value} = {...values, date_reg: new Date()}
            if (yo === 'ok') {

                const {token} = await Api.auth.register(value);

                notification.success({
                    message: "Успешно!",
                    description: "Переходим в админ-панель...",
                    duration: 2,
                });

                setCookie(null, "_token", token, {
                    path: "/",
                });

                location.href = "/dashboard";
            } else notification.error({
                message: "Ошибка",
                description: "Вам нет 18 лет",
                duration: 2
            })

        } catch (err) {
            notification.error({
                message: "Ошибка!",
                description: "Ошибка при регистрации",
                duration: 2,
            });
        }
    };

    return (<>

        <Form name="basic"
              labelCol={{
                  span: 10,
              }}
              labelAlign={"left"}
              onFinish={(values: fullForm) => {
                  onSubmit(values)
              }}>
            <Form.Item label="E-Mail"
                       name="email"
                       wrapperCol={{
                           span: 20
                       }}
                       rules={[
                           {
                               required: true,
                               message: "Укажите почту",
                               type: "email"
                           },
                       ]}>
                <Input/></Form.Item>
            <Form.Item
                label="Имя"
                name="first_name"
                wrapperCol={{
                    span: 20
                }}
                rules={[
                    {
                        required: true,
                        message: "Укажите имя",
                        min: 2,
                    },
                    {
                        message: "Не более 15 символов",
                        max: 15
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Фамилия"
                name="second_name"
                wrapperCol={{
                    span: 20
                }}
                rules={[
                    {
                        required: true,
                        message: "Укажите фамилию",
                        min: 2
                    },
                    {
                        message: "Не более 15 символов",
                        max: 15
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Логин"
                name="login"
                wrapperCol={{
                    span: 20
                }}
                rules={[
                    {
                        required: true,
                        message: "Укажите логин",
                        min: 6,
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                wrapperCol={{
                    span: 20
                }}
                rules={[
                    {
                        required: true,
                        message: "Укажите пароль",
                    },
                    {
                        min: 8,
                        validator: (_, value) => {
                            return regex.test(value) ? Promise.resolve() : Promise.reject(new Error('Пароль не соответствует формату. Строчные и прописные буквы. Цифры. Символы'))
                        }
                    }

                ]}

            >
                <Input.Password/>
            </Form.Item>
            <Form.Item
                label="Подтвердите пароль"
                name="pass"
                dependencies={['password']}
                wrapperCol={{
                    span: 20
                }}
                rules={[
                    {
                        required: true,
                        message: "Подтвердите пароль",
                    },
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Пароли не совпадают'));
                        },
                    }),
                ]}
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item name="gender" label="Пол" rules={[{required: true, message: 'Выберите пол'}]}>
                <Radio.Group>
                    <Radio value='man'>Муж</Radio>
                    <Radio value='woman'>Жен</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="yo"
                label="Вам есть 18 лет?"
                wrapperCol={{
                    span: 20
                }}
                rules={[{required: true, message: 'Укажите есть вам 18 лет или нет'}]}
            >
                <Select placeholder="Выберите элемент">
                    <Option value="err">Мне нет 18 лет</Option>
                    <Option value="ok">Мне есть 18 лет</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Согласен с правилами" name="rules" valuePropName="checked"
                       rules={[{required: true, message: 'Согласитесь с нашими правилами'}]}>
                <Checkbox/>
            </Form.Item>
            <Form.Item>
                <div className="g-recaptcha" data-sitekey="6Le2T8ApAAAAAJouTV8iUA4--Q6WRczhOqJ_ohFA"
                     data-action="signup">
                </div>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 20,
                }}
            >
                <Button type="primary" danger htmlType="submit">
                    Регистрация
                </Button>
            </Form.Item>
        </Form>

    </>)
};

export default RegisterForm