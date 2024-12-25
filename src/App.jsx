import { useState } from 'react'
import './App.css'
import ProjectsSidebar from './components/ProjectsSidebar'
import NewProject from './components/NewProject'

function App() {


  return (
    <>
      <main className=' h-screen my-8'>
        <ProjectsSidebar></ProjectsSidebar>
        <NewProject></NewProject>
      </main>
        
    </>
  )
}

export default App
