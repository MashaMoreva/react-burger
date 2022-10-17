import styles from './modal-overlay.module.css';

export function ModalOverlay({ onClose }) {
    
    const closeModalOverlay = (evt) => {
        if (evt.target.classList.contains(styles.overlay)) {
            onClose()
        }
    }

    return (
        <div className={styles.overlay} onClick={closeModalOverlay}>
        </div>
    )
}

