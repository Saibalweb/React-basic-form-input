import { useState } from 'react';
import ErrorModal from './UI/ErrorModal';
import SubmitButton from './UI/SubmitButton';
import styles from './UserInput.module.css'
const UserInput = (props) => {
    const [age, setAge] = useState('');
    const [name, setName] = useState('');
    const [valid, isValid] = useState(null);
    const nameHandler = (event) => {
        setName(event.target.value);
    };
    const ageHandler = (event) => {
        setAge(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        if(age.trim().length===0 || name.trim().length===0){
            isValid({title:"Enter Valid input",message:"Please Enter Valid input"});
            return;
        }
        else if(+age<18){
            isValid({title:"Age is not Valid",message:"Age must have to be more than 18"});
            return;
        }
        const userData = {
            userName: name,
            userAge: age,
        }
        props.onSubmitUserData(userData);

        setAge('');
        setName('');
    };
    const errorHandler =()=>{
        isValid(null);
    }
    return (
        <div>
            {valid && <ErrorModal title={valid.title} message={valid.message} onConfirm={errorHandler}/>}
            <form className={styles['UserInput-section']} onSubmit={submitHandler}>
                <h1>Enter Your Details</h1>
                <div className={styles['UserInput-div']}>
                    <input type='text' id='name' placeholder='Enter Your name' onChange={nameHandler} value={name}></input>
                </div>
                <div className={styles['UserInput-div']}>
                    <input type='number' id='age' placeholder='Enter Your age' onChange={ageHandler} value={age}></input>
                </div>
                <SubmitButton>Submit</SubmitButton>
            </form>
        </div>

    );
}
export default UserInput;