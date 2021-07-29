import Classes from './signup.module.css';
import Button from "../Utils/button";
import useForm from '../Hooks/useForm';
import {FaUserPlus, FaTwitter, FaGoogle, FaFacebook} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Signup = ({submitForm}) => {
    const {handleSubmit, handleChange, values, errors, length } = useForm(submitForm);
    
    
    return ( 
        <div className = {Classes.register}>
            <div className = { Classes.inner}>
            <h1>Signup <FaUserPlus/></h1>
            <form onSubmit = {handleSubmit} >
                <label htmlFor="Fname">First Name:<span>*</span></label>
                <input type="text"  id="Fname"  onChange = {handleChange} name = "FirstName" value = {values.FirstName}/>
                {errors.FirstName && <p>{errors.FirstName}</p>}
                <label htmlFor="Lname">Last Name:<span>*</span></label>
                <input type="text"  id="Lname"  onChange = {handleChange} name = "LastName" value ={values.LastName}/>
                {errors.LastName && <p>{errors.LastName}</p>}
                <label htmlFor="Tel">Phone Number:<span>*</span></label>
                <input type="tel"  id="Tel"  onChange = {handleChange} name ="Phone" value ={values.Phone}/>
                {errors.Phone && <p>{errors.Phone}</p>}
                <label htmlFor="Bio">Bio:<span style = {length > 10 ? {color: 'green'}: {color: 'red'}}>*{length}</span></label>
                <textarea id ="Bio"  onChange = {handleChange} value = {values.Bio} name ="Bio" placeholder ="Not More Than 300 Characters..."></textarea>
                {errors.Bio && <p>{errors.Bio}</p>}
                <label htmlFor="Worth">Worth:<span>*</span></label>
                <input type="Worth" id="Worth"  onChange = {handleChange} name ="Worth" value={values.Worth}/>
                {errors.Worth && <p>{errors.Worth}</p>}
                <div className = {Classes.terms}>
                    <div><input type="checkbox" /></div>
                    <div><p style = {{margin: "0", padding: "0", color: "black"}}>I agree to the <Link to = '/'>terms of services</Link></p></div>
                </div>
                    <Button >Register</Button>
                    <div className= {Classes.socialmedia}>
                        <div>  <hr/> </div>
                        <div>or</div>
                        <div> <hr /> </div>
                    </div>
                    <div className={Classes.social_icons}>
                        <div> <FaGoogle /> </div>
                        <div> <FaFacebook /> </div>
                        <div> < FaTwitter/> </div>
                    </div>
            </form>
            </div>
            
        </div>
     );
}
 
export default Signup;