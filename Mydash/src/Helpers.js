
import {alphaNumericValidation,emailValidation,passwordValidation,phonenumbervalidation} from './Constants';



export function alphaNumeric(input) {
    return /^[a-zA-z0-9/s ]{3,50}$/.test(input)?false:alphaNumericValidation;
}


export function email(input) {
    return /^.+@.+\..+$/.test(input)?false:emailValidation;
}

export function password(input) {
    return /^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])).{4,50}$/.test(input)?false:passwordValidation;
}
export function phonenumber(input){
    return /^[789]{1}[0-9]{9}$/.test(input)?false:phonenumbervalidation;
}

