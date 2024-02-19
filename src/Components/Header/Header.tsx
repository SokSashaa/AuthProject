import {FC, SetStateAction} from "react";
import './Header.css'

type HeaderProps = {
    setSelectedForm:React.Dispatch<SetStateAction<boolean>>
}

const Header:FC<HeaderProps> = ({setSelectedForm})=>{
    return(
        <div className={'header'}>
            <p onClick={()=>setSelectedForm(false)}>Log in</p>
            <p onClick={()=>setSelectedForm(true)}>Sign up</p>
        </div>
    )
}
export default Header