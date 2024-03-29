import { useState } from "react"
import Validation from "./Validation"
import styles from  '../signup.module.css'

const Signup = () => {
    const [details, setdetails] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        gender: '',
        email: '',
        password: '',
    })

    const [errorDetails, setErrorDetails] = useState({
        emailError: '',
        passwordError: ''
    })

    const btnSignup = (e) => {
        e.preventDefault()

        const validateResult = Validation(details.email, details.password)

        setErrorDetails({
            emailError: validateResult.validEmail ? '' : 'Please enter a valid email address',
            passwordError: validateResult.passwordValid ? '' : 
            'Password must start with a capital letter, have a minumum length of 8 characters, and contain at least one symbol'
        })

        if (validateResult.validEmail && validateResult.passwordValid) {
            alert('Registration Succesful')
            console.log(details)
        }else{
            // console.log('')
        }
    }

    const updatedetail = (e) => {
        const name = e.target.name
        const value = e.target.value
        setdetails(
            (prevState) => ({
                ...prevState,
                [name]: value
            })
        )
    }



    return (
        <>
            <div className={styles.form}>
                <h2>Sign Up</h2>
                <form onSubmit={btnSignup}>
               
                    <div>
                    <label htmlFor="firstName">Firstname: </label> <br />
                    <input type="text" required name="firstName" value={details.firstName} id="firstName" onChange={updatedetail} />
                    
                    </div>
                    <br />

                    <div>
                    <label htmlFor="lastName">Lastname: </label> <br />
                    <input type="text" required name="lastName" value={details.lastName} id="lasttName" onChange={updatedetail} />
                    </div>
                    <br />
                    
                    <div>
                    <label htmlFor="userName">Username: </label> <br />
                    <input type="text" name="userName" value={details.userName} id="userName" onChange={updatedetail} />
                    </div>
                    <br />

                    <div>
                    <label htmlFor="gender">Gender: </label>
                    <select name="gender" className={styles.gender} required id="gender" onChange={updatedetail}>
                        <option value=""></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                    </div>
                    <br />
                    <div>
                    <label htmlFor="email">Email: </label> <br />
                    <input type="text" name="email" required value={details.email} id="email" onChange={updatedetail} />
                    {errorDetails.emailError && <p>{errorDetails.emailError}</p>}
                    <br /> <br />
                    </div>

                    <div>
                    <label htmlFor="password">Password: </label> <br />
                    <input type="password" required name="password" value={details.password} id="firstName" onChange={updatedetail} />
                    {errorDetails.passwordError && <p className={styles.pass}>{errorDetails.passwordError}</p>}
                    <br />
                    </div>

                    <button  type="submit" className={styles.btn}>Sign Up</button>  
                </form>
                                

            </div>
        </>
    )
}


export default Signup;