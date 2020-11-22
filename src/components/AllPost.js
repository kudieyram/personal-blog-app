import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {
    Link
  } from "react-router-dom"; 


function AllPostsComponent(props) {
  
  return (
    <div className="list-group">
        
         {
           props.info.map((item, index) => (
           
            <Link key={index} className="list-group-item list-group-item-action mt-2" >
              <div className="d-flex w-100 justify-content-between" >
                <h5 className="mb-1">{item.title}</h5>
                <small>3 days ago</small>
            </div>
                <p className="mb-1">{item.content}</p>
                <small>{item.author}</small>
            </Link>
           ))
         }
     
    </div>
  );
}

export default AllPostsComponent;







