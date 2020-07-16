import React from 'react';
import Questionaire from '../component/questionaire';

const dataSet = [
    {
        Question :"What is your Name ?",
        options :[
         {id:1,Name:"Priyam"},
         {id:1,Name:"Ayushi"},
         {id:1,Name:"Payal"},
         {id:1,Name:"Saumi"},
        ]
    },
    {
        Question :"who is ypor friend ?",
        options :[
         {id:1,Name:"Priyam"},
         {id:1,Name:"Ayushi"},
         {id:1,Name:"Payal"},
         {id:1,Name:"Saumi"},
        ]
    },
    {
        Question :"who is ypor Enmey ?",
        options :[
         {id:1,Name:"Priyam"},
         {id:1,Name:"Ayushi"},
         {id:1,Name:"Payal"},
         {id:1,Name:"Saumi"},
        ]
    },
    
]
const QuestionList = () =>{
    return (
        <>
        {dataSet.map(  priyam  =>{
           return <Questionaire props={priyam}/> 
        })}
        </>
    )
}

export default QuestionList;