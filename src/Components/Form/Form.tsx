import './Form.css'
import {FC} from "react";

const Form: FC = () => {

    return (
        <div className={'wrapper'}>
            <form className={'wrapperForm'}>
                <div className={'row'}>
                    <p>First Name</p>
                    <input type={'text'} required={true} placeholder={'First Name'}/>
                </div>

                <div className={'row'}>
                    <p>Second Name</p>
                    <input type={'text'} required={true} placeholder={'Second Name'} minLength={2} maxLength={15}/>
                </div>

                <div className={'row'}>
                    <p>E-mail</p>
                    <input type={'email'}  required={true} placeholder={'email'}/>
                </div>

                <div className={'row'}>
                    <div className={'row-span'}><input type={'radio'} required={true} name={'gender'}/><p>Man</p></div>
                    <div className={'row-span'}><input type={'radio'} required={true} name={'gender'}/><p>Woman</p></div>
                </div>

                <div className={'row'}>
                    <select required={true}>
                        <option value={''}>I am not 18 y.o.</option>
                        <option  value={'true'}>I am 18 y.o.</option>
                    </select>
                </div>

                <div className={'row'}>
                    <p>Login</p>
                    <input type={'text'}  required={true} placeholder={'Login'}/>
                </div>

                <div className={'row'}>
                    <p>Password</p>
                    <input type={'password'}  required={true} placeholder={'Password'}/>
                </div>

                <div className={'row'}>
                    <p>Confirm password</p>
                    <input type={'password'} required={true} placeholder={'Password'}/>
                </div>

                <div className={'row-span'}>
                    <input type={'checkbox'} required={true}/>
                    <p>I accept the rules</p>
                </div>

                <button type={'submit'}>Select</button>
            </form>
        </div>
    )
}

export default Form