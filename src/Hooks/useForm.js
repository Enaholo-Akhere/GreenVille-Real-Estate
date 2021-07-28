import { useState,useEffect } from 'react';
import Validation from '../Validate/validation';

const useForm = (submitForm) => {
    const [dataIsCorrect, setDataIsCorrect] = useState(false)
    const [errors, setError] = useState({});
    const [length, setLength] = useState(null);
    const [values, setValues] = useState({
        FirstName:"",
        LastName: "",
        Phone: "",
        Bio: "",
        Worth: ""
    });

const handleSubmit = (event) => {
    event.preventDefault();
    setError(Validation(values));
    if(Object.keys(errors).length === 0){
    setDataIsCorrect(true)
    }
}

//submitting the user data using useEffect Hook
useEffect(()=>{
    if(Object.keys(errors).length === 0 && dataIsCorrect){
        fetch('http://localhost:8000/reg', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(values)
    }).then(()=>{
        console.log("submit")

    })
        submitForm(true);
    }
 },[errors, submitForm, dataIsCorrect, values])

//Function to set values on changes
const handleChange = (event) =>{
    setValues({
        ...values,
    [event.target.name]: event.target.value
})
  
    if(event.target.name === 'Bio'){
        setLength(300 - event.target.value.length)
    }

}

return {handleSubmit, handleChange, values, errors, length};

}
export default useForm;