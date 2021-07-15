const Validation = (values) => {
    let errors = {};
    let reg = /^[A-Za-z]+$/;
    if(!values.fname){
        errors.fname = "First name is required";
    }
    else if(!values.fname.match(reg)){
        errors.fname = "Special Characters not allowed";
    }
    if(!values.lname){
        errors.lname = "Last name is required";
    }
    else if(!values.lname.match(reg)){
        errors.lname = "Special Characters not allowed";
    }
    if(!values.phone){
        errors.phone = "Field is required";
    }
    else if(values.phone.match(reg)){
        errors.phone = "Alphabets not allowed";
    }
    if(!values.bio){
        errors.bio = "Field is required";
    }
    else if(values.bio.length > 300){
        errors.bio = "Field too lenghty"
    }

    if(!values.password){
        errors.password = "Field is required";
    }else if(values.password.length <6){
        errors.password = "Password too short";
    }

    return errors;
    
}

export default Validation;