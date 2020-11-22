import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {
    Link
  } from "react-router-dom"; 


function AllPostsComponent(props) {
  const [postsState, setPosts] = React.useState({
    posts: props.info,
   })

  return (
    <div className="list-group">
        
         {
           postsState.posts.map((item, index) => (
           
        <Link key={index} className="list-group-item list-group-item-action mt-2" >
          <div className="d-flex w-100 justify-content-between" >
            <h5 className="mb-1">{item.title}</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">{item.content}</p>
            <small>Blog Content</small>
        </Link>
           ))
         }
     
    </div>
  );
}

export default AllPostsComponent;







