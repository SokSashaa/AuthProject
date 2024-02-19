import {FC} from "react";
import './LogIn.css'

const LogIn: FC = () => {
    return (
        <div className={'LogInDiv'}>
            <form className={'LogInForm'}>
                <div className={'row'}>
                    <p>Login</p>
                    <input type={'text'} required={true} placeholder={'Login'}/>
                </div>
                <div className={'row'}>
                    <p>Password</p>
                    <input type={'password'} required={true} placeholder={'password'}/>
                </div>

                <button type={"submit"}>Log In</button>
            </form>
        </div>
    )
}
export default LogIn