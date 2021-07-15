import React from "react";
import Classes from './login.module.css';
import Button from "../Utils/button";
import {Link} from 'react-router-dom';

const Signup = () => {
    return ( 
        <div className = {Classes.login}>
            
            <div className = { Classes.inner}>
            <h1>Login Page :)</h1>
            <form >
                <label htmlFor="Fname">First Name:</label>
                <input type="text" name="" id="Fname" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="" id="password" />
                <Button>Register</Button>
                <p className={Classes.forgotpass}>Forgot password? <Link to = '/'>Click Here</Link></p>
                
            </form>
            </div>
        </div>
     );
}
 
export default Signup;