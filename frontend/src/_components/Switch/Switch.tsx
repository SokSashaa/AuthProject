import {useTheme} from "@/hooks/useTheme";
import {ConfigProvider, Switch} from "antd";
import type { MenuProps } from 'antd';

export const SwitchTheme = () => {

    const itemsTheme = [
        {
            key: '1',
            label: 'Light',
        },
        {
            key: '2',
            label: 'Dark',
        },
    ];

    const [theme, handleChange] = useTheme('light');

    return (
        <>
            <span style={{color:"white",marginRight:'10px'}}>Тема</span>
            <Switch style={{marginRight:'10px'}} defaultChecked onChange={handleChange} />
        </>

    )
}