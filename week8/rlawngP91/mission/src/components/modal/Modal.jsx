import styles from './Modal.module.css';

const Modal = ({ title, message, onConfirm, onCancel }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h3 className={styles.modalTitle}>{title}</h3>
                <p className={styles.modalMessage}>{message}</p>
                <div className={styles.modalButtons}>
                    <button 
                        className={styles.cancelButton} 
                        onClick={onCancel}
                    >
                        취소
                    </button>
                    <button 
                        className={styles.confirmButton} 
                        onClick={onConfirm}
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;