import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({onStartAddProject}){
    return <div className="mt-24 text-center w-2/3">
        <img src={noProjectImage} alt='An empty task list' className=' w-16 mx-auto'/>
        <h2 className=' text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
        <p className=' text-stone-400 mb-4'>Selected a project or get started with a new</p>
        <p className=''>
            <Button onClick={onStartAddProject}>Create new project</Button>
        </p>

    </div>
}