import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {
    useHistory,
  } from "react-router-dom"; 

function NewPostComponent() {

  const routeHistory = useHistory()

  const [titleState, setTitle] = React.useState({
   title: "",
  })

  const [contentState, setContent] = React.useState({
   content: "",
  })

  function handleTitleChange(event) {
    setTitle({
     'title' : event.target.value        
    })
  }

  function handleContentChange(event) {
    setContent({
       'content' : event.target.value        
    })
  }

  function handlePostAdd(event) {
    event.preventDefault(); 
      if ( titleState.title ==='' ||  contentState.content===''){
       alert ('Need to provide Blog Title and Content to proceed. Try Again')
        return
      }
      routeHistory.push('/all_posts')
  }
   
  return (
    <div className="login-wrapper" >
        <div className="login-form">
          <form>
            <h2 className="text-center">Welcome Kudi_yram Blog!</h2>       
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Title of Blog Post" required="required" name="title" value={titleState.title} onChange={handleTitleChange}/>
            </div>

            <div className="form-group">
              <textarea rows="8" type="text" className="form-control" placeholder="Content of Post" required="required" name="content" value={contentState.content} onChange={handleContentChange}/>
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" onClick={handlePostAdd}>Add New Blog Post</button>
            </div>      
    </form>
        </div>
         
     
    </div>
  );
}

export default NewPostComponent;
