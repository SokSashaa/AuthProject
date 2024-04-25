'use client'
import {FC, useEffect, useState} from "react";
import * as Api from "@/_api";

const CountUsers: FC = () => {
    const [countObj, setCount] = useState<{ count: number }[]>([{count: 0}])

    useEffect(() => {
        Api.stats.getCountUsers().then(setCount)
    }, []);

    return (
        <>
            {countObj.map((item) => <p>Количество пользователей:
                <span style={{fontWeight: "bold"}}> {item.count}</span>
            </p>
            )}

        </>
    )
}
export default CountUsers