import React from 'react';
import ReactDOM from 'react-dom/client';

const Part = (curso) =>{
  
  return (
    <p>{(curso.curso[0])} {curso.curso[1]}</p>
  )
}
const Header = (curso) => {
  return (
    <>
      <h1>{curso.course}</h1>
    </>
  )
}
const Content = (cursos) => {
  
  return (
    <div>
      <Part curso = {[cursos.cursos[0]['name'],cursos.cursos[0]['exercises']]} />
      <Part curso = {[cursos.cursos[1]['name'],cursos.cursos[1]['exercises']]} />
      <Part curso = {[cursos.cursos[2]['name'],cursos.cursos[2]['exercises']]} />
    </div>
  )
}
const Total = (ejercicios) => {
  return(
  <>
    <p>Number of exercises {ejercicios.ejercicios[0].exercises + ejercicios.ejercicios[1].exercises + ejercicios.ejercicios[2].exercises}</p>
  </>
  )
}
const App = () => {
  const curso = 'Half Stack application development'
  const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course = {curso} />
      <Content  cursos = {[part1,part2,part3]} />
      <Total ejercicios = {[part1,part2,part3]}/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));
