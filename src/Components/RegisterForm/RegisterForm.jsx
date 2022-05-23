import React from 'react';
import styles from './RegisterForm.module.css';
import { useForm } from 'react-hook-form';
import { loginError, loginSuccess } from '../../store/auth/auth.actions';
import { useDispatch } from 'react-redux';
import { BASE_URL, PostFetch } from '../../ApiManager/ApiConst';
import { ShowMessage } from '../../Utils/Utility';
import { R } from '../../res';
import { startLoad, stopLoad } from '../../store/load/load.actions';

export const RegisterForm = ({ setForm, setOpen }) => {

    const dispatch = useDispatch();

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLoginClick = () => {
        setForm("login")
        control.unregister()
    }

    const onRegisterSubmit = async (item) => {
        try {
            dispatch(startLoad())
            const response = await PostFetch(`${BASE_URL}auth/register`, item, 'withoutAuth')
            if (response.status === 200) {
                ShowMessage("Registered Successfully", R.colors.lightGreen)
                dispatch(stopLoad())
                dispatch(loginSuccess(response))
                setOpen(false)
            }
            else {
                dispatch(stopLoad())
                ShowMessage(response.error, R.colors.textRed)
            }
        } catch (error) {
            dispatch(stopLoad())
            dispatch(loginError(error))
            ShowMessage(error, R.colors.textRed)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onRegisterSubmit)}>
                <div className={styles.modalTitle}>
                    <label htmlFor="name">Name</label>
                    <input
                        control={control}
                        type="text"
                        id='name'
                        className={styles.input}
                        placeholder='Enter your name'
                        name="name"
                        {...register('name',
                            {
                                required: "Name is required"
                            })}
                    />
                    <p>{errors?.name?.message}</p>
                </div>
                <div className={styles.modalTitle}>
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                        control={control}
                        type="text"
                        id='mobile'
                        className={styles.input}
                        placeholder='Enter your mobile number'
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
                    <label htmlFor="email">Email</label>
                    <input
                        control={control}
                        type="text"
                        id='email'
                        className={styles.input}
                        placeholder='Enter your email'
                        name="email"
                        {...register('email',
                            {
                                required: "Email is required",
                                pattern: { value: /\S+@\S+\.\S+/, message: 'Email is invalid' }
                            })}
                    />
                    <p>{errors?.email?.message}</p>
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
                    <p>Register</p>
                </button>
                <div className={styles.registerMsg} onClick={handleLoginClick}>
                    <p>Already have an account Click to Login</p>
                </div>
            </form>
        </div>
    )
}
