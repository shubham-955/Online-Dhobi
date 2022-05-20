import React, { useState } from 'react';
import styles from './LoginModal.module.css';
import { Modal } from '@material-ui/core';
import { Close } from '@material-ui/icons';

export const LoginModal = ({ open, setOpen }) => {

    const [form, setForm] = useState("login")

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={styles.screenView}
            >
                <div className={styles.modalView}>
                    <div className={styles.closeIconView}>
                        <Close style={{ fontSize: 22 }} onClick={() => setOpen(false)} />
                    </div>
                    {form === "login" ?
                        <>
                            <div className={styles.modalTitle}>
                                <label htmlFor="email">Email</label>
                                <input type="text" id='email' className={styles.input} />
                                {/* <p>Error</p> */}
                            </div>
                            <div className={styles.modalTitle}>
                                <label htmlFor="password">Password</label>
                                <input type="text" id='password' className={styles.input} />
                                {/* <p>Error</p> */}
                            </div>
                            <div className={styles.loginBtn}>
                                <p>Login</p>
                            </div>
                            <div className={styles.registerMsg} onClick={() => setForm("register")}>
                                <p>Click to create an account</p>
                            </div>
                        </>
                        :
                        <>
                            <div className={styles.modalTitle}>
                                <label htmlFor="email">Email</label>
                                <input type="text" id='email' className={styles.input} />
                                {/* <p>Error</p> */}
                            </div>
                            <div className={styles.modalTitle}>
                                <label htmlFor="password">Password</label>
                                <input type="text" id='password' className={styles.input} />
                                {/* <p>Error</p> */}
                            </div>
                            <div className={styles.modalTitle}>
                                <label htmlFor="cpassword">Confirm Password</label>
                                <input type="text" id='cpassword' className={styles.input} />
                                {/* <p>Error</p> */}
                            </div>
                            <div className={styles.loginBtn}>
                                <p>Register</p>
                            </div>
                            <div className={styles.registerMsg} onClick={() => setForm("login")}>
                                <p>Already have an account Click to Login</p>
                            </div>
                        </>
                    }
                </div>
            </Modal>
        </div>
    )
}
