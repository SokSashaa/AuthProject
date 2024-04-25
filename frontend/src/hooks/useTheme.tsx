import React, {createContext, useEffect, useState} from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>

type Theme = 'dark' | 'light'

type useThemeReturn = [ string, (e: boolean) => void ];

export const useTheme = (initialTheme:Theme): useThemeReturn => {

    const [theme, setTheme] = useState<Theme>(initialTheme)

    const handleChange = (e: boolean) => setTheme(e ? 'light' : 'dark')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme])

    return [theme, handleChange]
}