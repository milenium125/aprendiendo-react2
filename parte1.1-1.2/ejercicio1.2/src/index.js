import React from 'react';
import ReactDOM from 'react-dom/client';
const exercises1 = 10
const exercises2 = 7
const exercises3 = 14
const Part = (part) =>{
  return (
    <p>{part.part[0]} {part.part[1]}</p>
  )
}
const Header = (course) => {
  return (
    <>
      <h1>{course.course}</h1>
    </>
  )
}
const Content = () => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  return (
    <div>
      <Part part= {[part1, exercises1]}  />
      <Part part= {[part2, exercises2]} />
      <Part part= {[part3, exercises3]}  />
    </div>
  )
}
const Total = () => {
  return(
  <>
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  </>
  )
}
const App = () => {
  const curso = 'Half Stack application development'
  return (
    <div>
      <Header course = {curso} />
      <Content />
      <Total />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));
