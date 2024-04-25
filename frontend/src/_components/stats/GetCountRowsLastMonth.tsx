'use client'
import {FC, useEffect, useState} from "react";
import * as Api from '@/_api'

const GetCountRowsLastMonth:FC = ()=>{
    const [countRows,setCountRows] = useState<{count:number}[]>([{count:0}])
    useEffect(() => {
        Api.stats.getCountRowsLastMonth().then(setCountRows)
    }, []);
    return (
       <>
           {
               countRows.map((item)=><p>За последний месяц было зарегистрировано:
                       <span style={{fontWeight:"bold"}}> {item.count}</span>
               </p>
               )
           }
       </>
    )
}

export default GetCountRowsLastMonth