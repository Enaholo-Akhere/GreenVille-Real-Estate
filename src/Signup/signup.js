import Classes from './signup.module.css';
import Button from "../Utils/button";
import useForm from '../Hooks/useForm';
import {FaUserPlus} from 'react-icons/fa';

const Signup = ({submitForm}) => {
    const {handleSubmit, handleChange, values, errors, length } = useForm(submitForm);
    
    
    return ( 
        <div className = {Classes.register}>
            <div className = { Classes.inner}>
            <h1>Register User <FaUserPlus/></h1>
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
                
            
                <Button >Register</Button>
            </form>
            </div>
            
        </div>
     );
}
 
export default Signup;