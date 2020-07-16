import React from 'react';

const Questionaire = (props) => {
console.log(props.props.options); // for checking 
    return (
        <>
        <h3>{props.props.Question}</h3>
            <br></br>
            <br></br>
            {props.props.options.map((option,index) => {
                return <>
                    <h4>{option.Name}</h4>
                    <br />
                </>
            })}
        </>
    )
}

export default Questionaire;