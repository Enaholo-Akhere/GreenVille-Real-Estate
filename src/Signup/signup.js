import Classes from './signup.module.css';
import Button from "../Utils/button";
import useForm from '../useForm/useForm';


const Signup = ({submitForm}) => {
    const {handleSubmit, handleChange, values, errors} = useForm(submitForm)
    
    return ( 
        <div className = {Classes.register}>
            <div className = { Classes.inner}>
            <h1>Signup Page</h1>
            <form onSubmit = {handleSubmit} >
                <label htmlFor="Fname">First Name:<span>*</span></label>
                <input type="text"  id="Fname"  onChange = {handleChange} name = "fname" value = {values.fname}/>
                {errors.fname && <p>{errors.fname}</p>}
                <label htmlFor="Lname">Last Name:<span>*</span></label>
                <input type="text"  id="Lname"  onChange = {handleChange} name = "lname" value ={values.lname}/>
                {errors.lname && <p>{errors.lname}</p>}
                <label htmlFor="Tel">Phone Number:<span>*</span></label>
                <input type="tel"  id="Tel"  onChange = {handleChange} name ="phone" value ={values.phone}/>
                {errors.phone && <p>{errors.phone}</p>}
                <label htmlFor="Bio">Bio:<span>*</span></label>
                <textarea id ="Bio"  onChange = {handleChange} value = {values.bio} name ="bio" placeholder ="Not More Than 300 Characters..."></textarea>
                {errors.bio && <p>{errors.bio}</p>}
                <label htmlFor="password">Password:<span>*</span></label>
                <input type="password" id="password"  onChange = {handleChange} name ="password" value={values.password}/>
                {errors.password && <p>{errors.password}</p>}
            
                <Button >Register</Button>
            </form>
            </div>
            
        </div>
     );
}
 
export default Signup;