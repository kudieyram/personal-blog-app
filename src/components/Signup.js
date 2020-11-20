import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {
    Link
  } from "react-router-dom"; 

function SignUpComponent() {
    const [state, setState] = React.useState({
        email: "",
        password: "",
        fullname: "",
        confirmpassword: "",
     })
     function handleFullNameChange(event) {
        setState ({
            'fullname': event.target.value
        }) }
     function handleEmailChange(event) {
        setState ({
            'email': event.target.value
        }) 
}

    function handlePasswordChange(event) {
    setState ({
       'password' : event.target.value        
    })
}
    function handleConfirmPasswordChange(event) {
    setState ({
        'confirmpassword': event.target.value
    }) 
}
    const handlesigup = () =>{
        alert('😍Sign Up Successful!     ' + state.fullname)
    }
  return (
    <div className="login-wrapper" >
        <div className="login-form">
    <form>
        <h2 className="text-center">Sign up</h2>       
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Full Name" required="required" value={state.fullname} onChange={handleFullNameChange}/>
        </div>
        <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" required="required" value={state.email} onChange={handleEmailChange}/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required="required" value={state.password} onChange={handlePasswordChange}/>
        </div>
        <div className="form-group">
            <input type="confirmpassword" className="form-control" placeholder="Confirm Password" required="required" value={state.confirmpassword} onChange={handleConfirmPasswordChange}/>
        </div>

        <div className="form-group">
            <button className="btn btn-primary btn-block" onClick={handlesigup}>Sign Up</button>
        </div>
              
    </form>
    <p className="text-center">Already have an account?<a href='/login'>Log In</a></p>
</div>
    </div>
  );
}

export default SignUpComponent;
