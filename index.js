import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.atrr1} {props.atrr2}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(t => <Part atrr1={t.name} atrr2={t.exercises}/>)}
    </div>
  )
}

const Total = (props) => {
  let res=0
  {props.parts.forEach(element => {res+=element.exercises})}
  return (
      <p>
        {res}
      </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name : 'Fundamentals of React',
      exercises: 10
    },
    {
      name : 'Using props to pass data',
      exercises: 7
    },
    {
      name : 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts}/>
     <Total parts = {parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))