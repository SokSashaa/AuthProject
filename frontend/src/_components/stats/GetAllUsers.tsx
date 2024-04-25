'use client'
import {FC, useEffect, useState} from "react";
import * as Api from '@/_api'

const GetAllUsers: FC = () => {
    const [sernameArray, setSernameArray] = useState<{second_name: string}[]>([])
    useEffect(() => {
        Api.stats.getAllUsers().then(setSernameArray)
    }, []);
    return (
        <div style={{marginLeft:'40px'}}>
            <p>Фамилии всех пользователей:</p><br/>
            <ul >
                {
                    sernameArray.map((item)=><li>{item.second_name}</li>)
                }
            </ul>
        </div>
    )
}
export default GetAllUsers