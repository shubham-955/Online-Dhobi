import React from 'react'
import { Modal } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import styles from './ModalUI.module.css'

export const ModalUI = ({ open, handleClose, renderItem, modalWidth }) => {

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={styles.screenView}
            >
                <div className={styles.modalView} style={{ width: modalWidth }}>
                    <div className={styles.closeIconView}>
                        <Close style={{ fontSize: 22 }} onClick={handleClose} />
                    </div>
                    {renderItem}
                </div>
            </Modal >
        </div>
    )
}
