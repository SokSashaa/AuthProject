'use client'
import React, {FC, useEffect, useState} from "react";
import {User} from "@/_api/dto/auth.dto";
import * as Api from '@/_api'

const GetLastRow: FC = () => {
    const [userData, setUser] = useState<User[]>([])
    useEffect(() => {
        Api.stats.getLastRow().then(setUser)
    }, []);
    return (
        <>
            {
                userData &&
                <>
                    {
                        userData.map((item) =>
                            <>
                                <p>ID: <b>{item.id}</b></p>
                                <p>Имя: <b>{item.first_name}</b></p>
                                <p>Фамилия: <b>{item.second_name}</b></p>
                                <p>E-Mail: <b>{item.email}</b></p>
                                <p>Login: <b>{item.login}</b></p>
                            </>
                        )
                    }

                </>

            }
        </>
    )
}
export default GetLastRow