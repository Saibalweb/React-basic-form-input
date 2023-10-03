import Deletbutton from './DeleteButton';
import styles from './ErrorModal.module.css'
const ErrorModal = (props) => {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onConfirm}></div>
            <div className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions} onClick={props.onConfirm}>
                    <Deletbutton >Proceed</Deletbutton>
                </footer>
            </div>
        </div>

    );
};
export default ErrorModal;