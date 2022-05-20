import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LocalMallOutlined } from '@material-ui/icons';
import styles from './Navbar.module.css'
import { LoginModal } from '../LoginModal/LoginModal';

export const Navbar = ({ isUserLoggedIn }) => {
    const [open, setOpen] = useState(false)

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
                        <LocalMallOutlined style={{ fontSize: 30 }} />
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
            <LoginModal open={open} setOpen={setOpen} />
        </div>
    )
}
