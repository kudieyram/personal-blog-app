import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {
    Link
  } from "react-router-dom"; 

function NewPostComponent() {
   
  return (
    <div className="login-wrapper" >
        <div className="login-form">
          <form>
            <h2 className="text-center">Welcome Kudi_yram Blog!</h2>       
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Title of Blog Post" required="required" name="title"/>
            </div>

            <div className="form-group">
              <textarea rows="8" type="text" className="form-control" placeholder="Content of Post" required="required" name="content"/>
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block">Add New Blog Post</button>
            </div>s      
    </form>
        </div>
         
     
    </div>
  );
}

export default NewPostComponent;
