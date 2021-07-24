
const Validation = (values) => {
    let errors = {};
    let reg = /^[A-Za-z]+$/;
    if(!values.FirstName){
        errors.FirstName = "First name is required";
    }
    else if(!values.FirstName.match(reg)){
        errors.FirstName = "Special Characters not allowed";
    }
    if(!values.LastName){
        errors.LastName = "Last name is required";
    }
    else if(!values.LastName.match(reg)){
        errors.LastName = "Special Characters not allowed";
    }
    if(!values.Phone){
        errors.Phone = "Field is required";
    } 
    else if(values.Phone.match(reg)){
        errors.Phone = "Alphabets not allowed";
    }
    if(!values.Bio){
        errors.Bio = "Field is required";
    }
    else if(values.Bio.length > 300){
        errors.Bio = "Field too lenghty"
    }

    if(!values.Worth){
        errors.Worth = "Field is required";
    } 
    else if(values.Worth.match(reg)){
        errors.Worth = "Alphabets not allowed";
    }
    return errors;
    
}

export default Validation;