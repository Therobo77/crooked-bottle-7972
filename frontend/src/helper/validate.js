


import { toast } from "react-hot-toast"

/**Validate Login Page userName */

export async function usernameValidate(values){
    const errors = usernameVerify({},values);
    return errors;
}



/** validate userName */
const usernameVerify = (error={},values)=>{
    if(!values.username){
        error.username = toast.error("UserName is Required")
    }
    else if(values.username.includes(" ")){
        error.username = toast.error("Invalid userName")
    }
    return error;
}