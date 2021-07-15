import { useState,useEffect } from 'react';
import Validation from '../Validate/validation'

const useForm = (submitForm) => {
    const [dataIsCorrect, setDataIsCorrect] = useState(false)
    const [errors, setError] = useState({});
    const [values, setValues] = useState({
        fname:"",
        lname: "",
        phone: "",
        bio: "",
        password: "",
    });

const handleSubmit = (event) => {
    event.preventDefault();
    setError(Validation(values));
    setDataIsCorrect(true);
}

const handleChange = (event) =>{
    setValues({
        ...values,
    [event.target.name]: event.target.value
})
}
 useEffect(()=>{
    if(Object.keys(errors).length === 0 && dataIsCorrect){
        submitForm(true);
    }
 },[errors, submitForm, dataIsCorrect])

return {handleSubmit, handleChange, values, errors};

}
export default useForm;