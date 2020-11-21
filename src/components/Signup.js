import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {
    Link,
    useHistory
  } from "react-router-dom"; 

function SignUpComponent() {
    //  this routehistory from the signup page to the new_post.
    const routeHistory = useHistory()

    // these are the const definitions of fullname, email, password, confirmpassword.
    const [fullNameState, setFullNameState] = React.useState({
       fullName: "",
     })

    const [emailState, setEmailState] = React.useState({
        email: "",
     })

     const [passwordState, setPasswordState] = React.useState({
        password: "",
     })

     const [confirmPasswordState, setConfirmPasswordState] = React.useState({
        confirmPassword: "",
     })

    //  these function are called when someone is typing.
     function handleFullNameChange(event) {
        setFullNameState ({
            'fullname': event.target.value
        }) 
        }

     function handleEmailChange(event) {
        setEmailState ({
            'email': event.target.value
        }) 
        }

    function handlePasswordChange(event) {
    setPasswordState ({
       'password' : event.target.value        
    })
    }

    function handleConfirmPasswordChange(event) {
    setConfirmPasswordState ({
        'confirmPassword': event.target.value
    }) 
    }

    // these arguments handle the validity of the input details.
    function handlesigup (event) {
        event.preventDefault();
        if ( fullNameState.fullName ==='' || emailState.email ==='' || passwordState.password ==='' || confirmPasswordState.confirmPassword ===''){
            alert('Sign up unsuccessfully')
            return    
        }

        if ( passwordState.password !== confirmPasswordState.confirmPassword){
            alert( 'Password not match')
            return
        }
        // this sends us to the new_post page, if all the conditions are met.
       routeHistory.push('/new_post') 
       
    }
  return (
    <div className="login-wrapper" >
        <div className="login-form">
            <form>
                <h2 className="text-center">Sign up</h2>       
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="Full Name" required="required" value={fullNameState.fullname} onChange={handleFullNameChange}/>
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" required="required" value={emailState.email} onChange={handleEmailChange}/>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="required" value={passwordState.password} onChange={handlePasswordChange}/>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Confirm Password" required="required" value={confirmPasswordState.confirmPassword} onChange={handleConfirmPasswordChange}/>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-block" onClick={handlesigup}>Sign Up</button>
                </div>    
            </form>
    
                <p className="text-center">Already have an account?<Link to='/login'>Log In</Link></p>

        </div>
    </div>
  );
}

export default SignUpComponent;
