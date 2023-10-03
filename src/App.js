import UserInput from "./components/UserInput";
import UserList from "./components/Userlist";
import styles from './App.module.css';
import { useState } from "react";
const App =()=>{
  const DummyData=[{
    key:Math.random(),
    name:'Saibal kole',
    age:23
  },
  {
    key:Math.random(),
    name:'Ram Mondal',
    age:44,
  }];
  const [userInput,setUserInput]=useState(DummyData);

  const userDataHandler=(userData)=>{
      setUserInput((prevData)=>{
        const newArr = [...prevData];
        newArr.unshift({name:userData.userName,age:userData.userAge,id:Math.random(),});
        return newArr;
      });
  };
  return(
    <div>
      <UserInput onSubmitUserData={userDataHandler} />
      <UserList datas={userInput}/>
    </div>
  );
}
export default App;
