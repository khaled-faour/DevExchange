import React, { useState, useEffect } from 'react';
import styles from './styles';

const Modal = ({ children, onClose, isOpen }) => {
    const [isVisible, setIsVisible] = useState(false);
    const classes = styles();
    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    }

    return (
        <div className={isVisible ? classes.modalContainer : 'modal-container hidden'}>
            <div className={classes.modalContent}>
                {children}
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;