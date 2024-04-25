'use client'
import {FC} from "react";
import {Menu} from "antd";
import {useRouter} from "next/navigation";

const MenuStats: FC = ()=>{
    const router = useRouter();
    return (<Menu theme={'dark'}
                  items={[
                      {key: '/stats/users', label: 'Пользователи'},
                      {key: '/stats/countUsers', label: 'Кол-во пол-й'},
                      {key: '/stats/getLastRow', label: 'Посл. запись'},
                      {key: '/stats/countRowsLastMonth', label: 'Кол-о записей'},
                  ]}
                  onSelect={({key}) => router.push(key)}
                  mode={'horizontal'}
    />)
}
export default MenuStats