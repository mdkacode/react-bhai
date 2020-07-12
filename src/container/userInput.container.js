import React, { useState } from 'react';
import UserName from '../component/userName.component'
import loveCalculator from "../util/love.calulator";
const UserInputContainer = () => {
    const [girlName, setGirlName] =useState("");
    const [loveState, setLoveState] =useState("");
    const [boyName, setBoyName] =useState("");
    const onGirlType = (e) =>{
        setGirlName(e.target.value)
        console.log(e.target.value,"Girl Name");
    }
    const onBoyType = (e) =>{
        setBoyName(e.target.value)
        console.log(e.target.value,"Boy Name");
    }
    const onSubmit = () =>{
        console.log(boyName, girlName);

      (boyName && girlName)  &&  setLoveState(loveCalculator());
    }
    return <div style={{textAlign:"center",marginTop:"20%"}}>
         {loveState && <h2>{boyName} {loveState} {girlName}</h2>}
        < UserName placeholder="Enter Boy Name" getUserName={ onBoyType} />
        <br />
        <br />
        < UserName placeholder="Enter Girl Name" getUserName={ onGirlType} />
        <br />
        <br />
        <input type="submit" className="submit-btn" onClick={onSubmit} />

       
    </div>
}

export default UserInputContainer;