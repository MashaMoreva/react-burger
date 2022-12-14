import { FC } from "react";
import styles from './modal-overlay.module.css';
import { TModalOverlay } from '../../services/types/types';

export const ModalOverlay: FC<TModalOverlay> = ({ onClose }) => {

    // const closeModalOverlay = (evt) => {
    //     console.log(evt)
    //     if (evt.target.classList.contains(styles.overlay)) {
    //         onClose()
    //     }
    // }

    return (
        <div className={styles.overlay} onClick={onClose}>
        </div>
    )
}
