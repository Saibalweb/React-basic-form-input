import styles from './DeleteButton.module.css'
const Deletbutton =(props)=>{
    return(
        <button className={styles['user-list-button']}>{props.children}</button>
    );
};
export default Deletbutton;