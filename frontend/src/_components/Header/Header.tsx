'use client'
import {FC} from "react";
import {Avatar, Button, Layout, Menu, Popover} from "antd";
import styles from "./Header.module.scss";


import * as Api from "@/_api";
import {useRouter} from 'next/navigation'
import {SwitchTheme} from "@/_components/Switch/Switch";

export const Header: FC = () => {
    const router = useRouter();

    const onClickLogout = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
            Api.auth.logout();
            location.href = "/";
        }
    };

    return (
        <Layout.Header className={styles.root}>
            <div className={styles.headerInner}>
                <div className={styles.headerLeft}>
                    <h2>
                        Формочка
                    </h2>

                    <Menu
                        className={styles.topMenu}
                        theme="dark"
                        mode="horizontal"
                        onSelect={({key}) => router.push(key)}
                        items={[
                            {key: "/", label: "Главная"},
                            {key: "/dashboard/profile", label: "Профиль"},
                            {key: '/stats', label: 'Статистика'},

                        ]}
                    />
                </div>

                <div className={styles.headerRight}>
                    <SwitchTheme/>
                    <Popover
                        trigger="click"
                        content={
                            <Button onClick={onClickLogout} type="primary" danger>
                                Выйти
                            </Button>
                        }
                    >
                        <Avatar>A</Avatar>
                    </Popover>
                </div>
            </div>
        </Layout.Header>
    );
};