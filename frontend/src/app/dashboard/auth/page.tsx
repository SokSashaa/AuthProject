import {NextPage} from "next";
import Head from "next/head";
import LoginForm from "@/_components/auth/LoginForm";
import {ConfigProvider, Tabs} from "antd";
import RegisterForm from "@/_components/auth/RegisterForm";
import styles from './Auth.module.scss'

const AuthPage: NextPage = () => {
    return (<>
        <Head>
            <title>Dashboard / Auth</title>
        </Head>
        <main style={{width: 400, margin: "50px auto"}}>
            <ConfigProvider
                theme={{
                    token: {
                        colorText:'#52b69a'
                    },
                    components:{
                        Input: {
                            colorText:'#000000'
                        }
                    }
                }}
            >
                <Tabs
                    items={[
                        {
                            label: "Войти",
                            key: "1",
                            children: <LoginForm />,
                        },
                        {
                            label: "Регистрация",
                            key: "2",
                            children: <RegisterForm />,
                        },
                    ]}
                />
            </ConfigProvider>

        </main>
    </>)
}

export default AuthPage