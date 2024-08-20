import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { flushSync } from 'react-dom'

function App() {

  return (
    <>

      <h1>Vite + React</h1>
      <Person></Person>
      <Students></Students>

    </>
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

function Students(){  
  return(
  <div className='students'>
  <h3>I am a Students</h3>
  <p>Name:</p>
  
  <p>Age:</p>  
  
  </div>
  )
}


function Developer(){
  return(
    <div>
      
    </div>
  )
}


export default App
