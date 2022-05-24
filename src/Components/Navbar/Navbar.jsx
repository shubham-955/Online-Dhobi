import React from 'react'
import { Link, useNavigate, NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css'
import { UilShoppingBag, UilUser } from '@iconscout/react-unicons'
import { Badge } from '@material-ui/core';

export const Navbar = ({ isUserLoggedIn, userName }) => {

    const navigate = useNavigate();
    const location = useLocation();
    // const [anchorEl, setAnchorEl] = useState(null)
    // const show = Boolean(anchorEl)
    // const control = useForm();

    // const handleIcon = (e) => {
    //     setAnchorEl(e.currentTarget)
    // }

    // const onClose = () => {
    //     setAnchorEl(null)
    // }

    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? "#f3752a" : "black"
        }
    }

    const { pathname } = location;
    console.log(pathname)
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.brandName}>
                    <p><Link to="/">ONLINE DHOBI</Link></p>
                </div>
                {pathname === "/auth/login" || pathname === "/auth/signup" ?
                    <div />
                    :
                    <div className={styles.tabs}>
                        <ul>
                            <li className={styles.tabItem}>
                                <NavLink style={navLinkStyles} to="/">Home</NavLink>
                            </li>
                            <li className={styles.tabItem}>
                                <NavLink style={navLinkStyles} to="/about">About Us</NavLink>
                            </li>
                            <li className={styles.tabItem}>
                                <NavLink style={navLinkStyles} to="/faq">FAQ</NavLink>
                            </li>
                            <li className={styles.tabItem}>
                                <NavLink style={navLinkStyles} to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>}
                <div>
                    {isUserLoggedIn ?
                        <div className={styles.userSection}>
                            <Badge badgeContent={4} color='primary'>
                                <UilShoppingBag size="26" color="black" className={styles.shopBag} />
                            </Badge>
                            <div className={styles.profileIcon} onClick={() => navigate("/profile")}>
                                <UilUser size="26" color="black" />
                            </div>
                        </div>
                        :
                        <div className={styles.accessBtn}>
                            <div className={styles.login} onClick={() => navigate("/auth/login")}>
                                <p>Login</p>
                            </div>
                            <div className={styles.register} onClick={() => navigate("/auth/signup")}>
                                <p>Sign Up</p>
                            </div>
                        </div>
                    }
                </div>
            </nav>
        </>
    )
}
