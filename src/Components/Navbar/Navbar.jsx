import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LocalMallOutlined } from '@material-ui/icons';
import styles from './Navbar.module.css'
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { ModalUI } from '../ModalUI/ModalUI';
import { LoginForm } from '../LoginForm/LoginForm';
import { useForm } from 'react-hook-form';

export const Navbar = ({ isUserLoggedIn, userName }) => {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const [form, setForm] = useState("login")

    const control = useForm();

    const handleClose = () => {
        setOpen(false);
        control.unregister()
    }

    const renderItem = () => {
        return (
            <>
                {form === "login" ?
                    <LoginForm setForm={setForm} setOpen={setOpen} />
                    :
                    <RegisterForm setForm={setForm} setOpen={setOpen} />
                }
            </>
        )
    }

    const handleIcon = () => {

    }

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.brandName}>
                    <Link to="/"> <p>Online Dhobi</p> </Link>
                </div>
                <div className={styles.tabs}>
                    <ul>
                        <li className={styles.tabItem}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.tabItem}>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className={styles.tabItem}>
                            <Link to="/faq">FAQ</Link>
                        </li>
                        <li className={styles.tabItem}>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className='cart'>
                    {isUserLoggedIn ?
                        <div className={styles.userSection}>
                            <LocalMallOutlined style={{ fontSize: 30 }} onClick={handleIcon} />
                            <div className={styles.profileIcon} onClick={() => navigate('/profile')}>
                                <p>{userName ? userName.split("")[0] : ""}</p>
                            </div>
                        </div>
                        :
                        <div className={styles.login} onClick={() => setOpen(true)}>
                            <p>Login or Register</p>
                        </div>
                    }
                    {/* <div className='count'> */}
                    {/* <p>{count}</p> */}
                    {/* </div> */}
                </div>
            </nav>
            <ModalUI
                open={open}
                handleClose={handleClose}
                renderItem={renderItem()}
                modalWidth={400}
            />
        </div>
    )
}
