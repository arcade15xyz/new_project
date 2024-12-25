import './App.css'
import ProjectsSidebar from './components/ProjectsSidebar'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected';

export default function App() {
  return (
    <>
      <main className=' h-screen my-8 flex gap-8'>
        <ProjectsSidebar></ProjectsSidebar>
        <NoProjectSelected></NoProjectSelected>
        {/* <NewProject></NewProject> */}
      </main>
        
    </>
  );
}

