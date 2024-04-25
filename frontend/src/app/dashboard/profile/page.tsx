import {NextPage} from "next";
import {Button} from "antd";

import styles from "./Profile.module.scss";
import {checkAuth} from "@/_utils/checkAuth";
import React from "react";

import ProfileItem from "@/_components/profileItem/profileItem";



const DashboardProfilePage: NextPage = () => {

    checkAuth()


        return (
            <main>
                <div className={styles.root}>
                    <h1>Мой профиль</h1>
                    <ProfileItem/>
                </div>
            </main>
        );



};

export default DashboardProfilePage;