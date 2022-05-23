import React from 'react'
import { CircularProgress } from '@material-ui/core';
import styles from './Loading.module.css'

export const Loading = () => {
    return (
        <div className={styles.loader}>
            <CircularProgress />
        </div>
    )
}
