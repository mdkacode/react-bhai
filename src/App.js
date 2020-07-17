import React from 'react';
import UserInputContainer from "./container/userInput.container";
import QuestionList from "./container/questionList"
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state=  {
      name:"Mayank"
    }
    console.log("I will call First"); // this will call first
  }
 
  static getDerivedStateFromProps () {
    console.log('SECOND CALL');  // this will call second

     return {name :"Anmol"}
     console.log('aasas');
  }

  componentDidMount () {
    this.setState({
      name:"priyam" //
    })
    console.log('Third CALL');  // this will call second
  }
 
  render() {
    return (
      <>
        <UserInputContainer/>
        <QuestionList />
      </>
    );
  }
}

export default App;

