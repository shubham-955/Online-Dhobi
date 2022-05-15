import React from 'react'
import { Link } from 'react-router-dom';
import { LocalMallOutlined } from '@material-ui/icons';
import styles from './Navbar.module.css'

export const Navbar = () => {
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
                    <LocalMallOutlined style={{ fontSize: 30 }} />
                    <div className='count'>
                        {/* <p>{count}</p> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
