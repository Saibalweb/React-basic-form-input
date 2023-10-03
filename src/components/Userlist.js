import Deletbutton from './UI/DeleteButton';
import styles from './Userlist.module.css'

const UserList =(props)=>{
    return(
    <div className={styles['user-list-container']} >
        {props.datas.map((data)=>(
            <div className={styles['user-list']} key={data.key}>
            <p> {data.name}</p>
            <p>{data.age}</p>
            <Deletbutton>Delete</Deletbutton>
        </div>
        ))}
        
    </div>)
}
export default UserList;