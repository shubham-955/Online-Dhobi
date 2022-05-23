import React from 'react'
import styles from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import { BASE_URL, GetFetch, PostFetch } from '../../ApiManager/ApiConst';
import { useDispatch } from 'react-redux';
import { getUserName, loginError, loginSuccess } from '../../store/auth/auth.actions'
import { ShowMessage } from '../../Utils/Utility';
import { R } from '../../res';
import { startLoad, stopLoad } from '../../store/load/load.actions';

export const LoginForm = ({ setForm, setOpen }) => {

    const dispatch = useDispatch();
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (item) => {
        try {
            dispatch(startLoad())
            const response = await PostFetch(`${BASE_URL}auth/login`, item, 'withoutAuth')
            if (response.status === 200) {
                dispatch(loginSuccess(response))
                getUserData()
            }
            else {
                dispatch(stopLoad())
                dispatch(loginError(response.error))
                ShowMessage(response.error, R.colors.textRed)
            }
        } catch (error) {
            dispatch(stopLoad())
            dispatch(loginError(error))
            ShowMessage(error)
        }
    }

    const getUserData = async () => {
        dispatch(startLoad())
        const response = await GetFetch(`${BASE_URL}auth/getuser`, 'withAuth')
        if (response.status === 200) {
            ShowMessage("Login Successfully", R.colors.lightGreen);
            dispatch(stopLoad())
            dispatch(getUserName(response.user.name));
            setOpen(false);
        }
    }

    const handleRegisterClick = () => {
        setForm("register")
        control.unregister()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.modalTitle}>
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                        control={control}
                        type="number"
                        id='mobile'
                        className={styles.input}
                        placeholder='Enter your email'
                        name="mobile_number"
                        {...register('mobile_number',
                            {
                                required: "Mobile number is required",
                                pattern: { value: /^(\d{10})$/, message: 'Mobile number is invalid' }
                            })}
                    />
                    <p>{errors?.mobile_number?.message}</p>
                </div>
                <div className={styles.modalTitle}>
                    <label htmlFor="password">Password</label>
                    <input
                        control={control}
                        type="text"
                        id='password'
                        className={styles.input}
                        placeholder='Enter your password'
                        name="password"
                        {...register('password',
                            {
                                required: "Password is required",
                                minLength: { value: 5, message: 'Password must be at least 5 characters' }
                            })}
                    />
                    <p>{errors?.password?.message}</p>
                </div>
                <button className={styles.loginBtn}>
                    <p>Login</p>
                </button>
                <div className={styles.registerMsg} onClick={handleRegisterClick}>
                    <p>Click to create an account</p>
                </div>
            </form>
        </div>
    )
}
