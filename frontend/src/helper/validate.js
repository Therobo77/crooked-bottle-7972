


import { toast } from "react-hot-toast"



// ===================== Validate UserName =========================
/**Validate Login Page userName */

export async function usernameValidate(values){
    const errors = usernameVerify({},values);
    return errors;
}

/** validate userName */
const usernameVerify = (error={},values)=>{
    if(!values.Username){
        error.Username = toast.error('UserName is Required')
    }
    else if(values.Username.includes(" ")){
        error.Username = toast.error("Invalid userName")
    }
    return error;
}


// ===================== Validate Password =========================


/** validate password */
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}

/** validate password */
function passwordVerify(errors = {}, values){
    /* eslint-disable no-useless-escape */
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error("Password Required...!");
    } else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong Password...!");
    }else if(values.password.length < 4){
        errors.password = toast.error("Password must be more than 4 characters long");
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special character");
    }

    return errors;
}
