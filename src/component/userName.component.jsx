/**
 * this file will take  user input
 */

 import React from 'react';
 import "./style.css";
 const UserName = (props)=>{
     return <input 
     className="user-text-box"
    type={"text"} 
    placeholder={props.placeholder}
    onChange={ props.getUserName } /> // explation neeeds to give
 }
 export default UserName;