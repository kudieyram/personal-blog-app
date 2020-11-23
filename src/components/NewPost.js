import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import AllPostsComponent from './AllPost';

function NewPostComponent() {

  const [titleState, setTitle] = React.useState({
   title: "",
  })

  const [contentState, setContent] = React.useState({
   content: "",
  })

  const [postsState, setPosts] = React.useState({
    posts: [],
   })

   const [authorState, setAuthor] = React.useState({
    author: "",
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

  function handleAuthorChange(event) {
    setAuthor({
       'author' : event.target.value        
    })
  }

  function handlePostAdd(event) {
    event.preventDefault(); 
      if ( titleState.title ==='' ||  contentState.content==='' || authorState.author===''){
       alert ('Need to provide Blog Title and Content to proceed. Try Again')
        return
      }

      const post = {
        "title":  titleState.title,
        "content":  contentState.content,
        "author": authorState.author, 
      }
      
       postsState.posts.push(post) 

       setPosts({
        ...postsState,
      }) 

        // setting the input field to empty
      setTitle({
        "title": ""
      })

      setContent({
        "content": ""
      })

      setAuthor({
        "author": ""
      })
      // routeHistory.push('/all_posts')
  }
   
  return (
    <div className="login-wrapper"  >
        <div className="container">

          <div className="row">
            <div className="col-md-6">
          <form>
            <h2 className="text-center">Welcome Kudi_yram Blog!</h2>       
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Title of Blog Post" required="required" name="title" value={titleState.title} onChange={handleTitleChange}/>
            </div>

            <div className="form-group">
              <textarea rows="8" type="text" className="form-control" placeholder="Content of Post" required="required" name="content" value={contentState.content} onChange={handleContentChange}/>
            </div>

            <div className="form-group">
              <input type="text" className="form-control" placeholder="Author's Name" required="required" name="authorname" value={authorState.author} onChange={handleAuthorChange}/>
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" onClick={handlePostAdd}>Add New Blog Post</button>
            </div>      
          </form>
          </div>

          <div className="col-md-6">
            <div>
              <h2> Recent Post </h2>
              <AllPostsComponent info={postsState.posts}/>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default NewPostComponent;
