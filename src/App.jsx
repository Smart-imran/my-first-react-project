import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './Todo'
import './App.css'


function App() {

  return (
    <>

      <h1>Vite + React</h1>
      <Todo task= "Learn React" isDone={true} ></Todo>
      <Todo task= "Explore Core Concept++" isDone={false}></Todo>
      <Todo task= "Try another ++" isDone={true}></Todo>







      {/* <Device name="Laptop"></Device>
      <Device name="Mobile"></Device>
      <Device></Device>
      <Person ></Person>
      <Person ></Person>      
      <Developer name="Sweet"></Developer>
      <Developer name="Keya"></Developer>
      <Students grade = "7" score = "100"></Students>
      <Students grade = "8" score = "800"></Students>
      <Students grade = "9" score = "200"></Students> */}
    </>
  )
}

function Device(props){

  
  return(
    <div>
      <h2>
        This Device : {props.name}
      </h2>
    </div>
  )
}

function Person() {
  const age = 25;
  const money = 50;
  const persons = {name:"Imran", age: 20}

  return (
    <>
      <h3>I am a {persons.name} and age: {age} & TK: {money}</h3>
    </>
  )
}


const {grade, score} = {grade :"7", score:"100"}

function Students({grade, score}){ 
  return(
  <div className='students'>

  <h3>I am a Students</h3>
  <p>Grade:{grade}</p>  
  <p>Score:{score}</p>  
  
  </div>
  )
}



function Developer(props){
  const devStyle = {
    margin: "20px",
    padding: "20px",
    border : "2px solid red",
    borderRadius:"10px"

  }
  return(
    <div style={devStyle}>
      <h5>Developer Zone :{props.name}</h5>      
    </div>
  )
}


export default App
