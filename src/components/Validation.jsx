const Validation = (email, password) =>{
    const validEmail = /\S+@\S+\.\S+/.test(email);

    const passwordValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password); 

    return{
        validEmail: validEmail,
        passwordValid: passwordValid
    }

}

export default Validation