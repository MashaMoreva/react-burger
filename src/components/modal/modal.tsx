import React, { FC } from "react";
import { createPortal } from "react-dom";
import { useHistory } from "react-router-dom";
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { TModal } from "../../services/types/types";

export const Modal: FC<TModal> = ({ children, onClose }) => {

    const history = useHistory();
    const closeModal = () => {
        onClose ? onClose() : history.goBack();
    };

    React.useEffect(() => {
        function onKeyDown(evt: KeyboardEvent) {
            if (evt.key === 'Escape') {
                closeModal()
            }
        }

        document.addEventListener('keydown', onKeyDown)

        return () => {
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [])

    return createPortal(
        <>
            <ModalOverlay onClose={closeModal} />
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={closeModal}>
                    <CloseIcon type="primary" />
                </button>
                {children}
            </div>
        </>,
        document.getElementById('modals') as HTMLDivElement
    )
}
