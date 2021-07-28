import Signup from '../Signup/signup';
import Login from '../Login/login';
import Classes from './register.module.css';
import { useState } from 'react';

const Register = ({submitForm}) => {
    const [reg, setReg] = useState(true);
    const handleReg = () =>{
        setReg(true);
    }
    const handleLog = () =>{
        setReg(false);
        
    }


    return ( 
        
        <div className = {Classes.container}>
         <div className={Classes.register_container}>
            <h1>REGISTRATION PAGE</h1>
         </div>
         <div className={Classes.signup__login}>
             <div className={reg ? Classes.signup__buttons : Classes.signup__buttons_reg} onClick = {handleReg}><input type = "radio" id = "signup" name = "signup" /> <label htmlFor = "signup">Signup</label> </div>
             <div className= {reg ? Classes.login__buttons : Classes.login__buttons_log} onClick = {handleLog} ><input type = "radio" id = "login" name = "signup" /> <label htmlFor = "login">Login</label></div>
         </div>

            {reg ? <Signup submitForm ={submitForm} /> : <Login />}
        </div>
     );
}


 
export default Register;