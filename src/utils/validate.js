export const checkValidateData = (email, password) => {

    const isEmailValidate = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);    

    if(!isEmailValidate) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;
}