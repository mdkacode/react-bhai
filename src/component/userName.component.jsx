/**
 * this file will take  user input
 */

 import React from 'react';
 const UserName = (props)=>{
     return <input 
    type={"text"} 
    placeholder={props.placeholder}
    onChange={ props.getUserName } /> // explation neeeds to give
 }
 export default UserName;