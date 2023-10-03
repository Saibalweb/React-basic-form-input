import styles from './SubmitButton.module.css'
const SubmitButton =(props)=>{
    return(
        <div className={styles['button-div']}>
            <button type='submit' className={styles.button}>{props.children}</button>
        </div>
    );
};
export default SubmitButton;