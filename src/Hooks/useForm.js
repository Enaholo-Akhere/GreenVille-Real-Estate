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
    setDataIsCorrect(true);
    fetch('http://localhost:8000/reg', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(values)
    }).then(()=>{
        console.log("submit")

    })
    setDataIsCorrect(true)
}

const handleChange = (event) =>{
    setValues({
        ...values,
    [event.target.name]: event.target.value
})
  
    if(event.target.name === 'Bio'){
        setLength(300 - event.target.value.length)
    }

}
 useEffect(()=>{
    if(Object.keys(errors).length === 0 && dataIsCorrect){
        submitForm(true);
    }
 },[errors, submitForm, dataIsCorrect])

return {handleSubmit, handleChange, values, errors, length};

}
export default useForm;