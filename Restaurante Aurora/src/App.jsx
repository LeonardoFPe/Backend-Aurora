import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Main from "./components/Main"
import SectionDifferences from './components/SectionDifferences'
import SectionTeacher from "./components/SectionTeacher"
import SectionHighlights from './components/SectionHighlights'
import SectionAmbience from "./components/SectionAmbience"
import SectionReviews from './components/SectionReviews'

function App() {

  return (
    <>
      <Header/>
      <Main />
      <SectionDifferences/>
      <SectionTeacher/>
      <SectionHighlights/>
      <SectionAmbience/>
      <SectionReviews/>
    </>
  )
}

export default App
