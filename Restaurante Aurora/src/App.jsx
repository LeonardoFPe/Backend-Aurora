import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Main from "./components/Main"
import SectionDifferences from './components/SectionDifferences'
import SectionTeacher from "./components/SectionTeacher"

function App() {

  return (
    <>
      <Header/>
      <Main />
      <SectionDifferences/>
      <SectionTeacher/>
    </>
  )
}

export default App
