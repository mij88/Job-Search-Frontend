import {useState, useEffect} from 'react'
import './App.css';
import JobList from './JobList';
import JobForm from './JobForm';

function App() {
  const [jobs, setJobs] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentJob, setCurrentJob] = useState({})

  useEffect(() => {
    fetchJobs() // run fetchcode after being rendered
  }, []) //only run function after inital render

  const fetchJobs = async () =>  {

    const response = await fetch("http://127.0.0.1:5000/jobs") // fetch jobs
    const data = await response.json() // get jobs data
    setJobs(data.jobs)
    console.log(data.jobs)

  } 

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentJob({})

  }

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true)
  }

  const openEditModal = (jobs) => {
    if (isModalOpen) return
    setCurrentJob(jobs)
    setIsModalOpen(true)

  }
  
  const onUpdate = () => {
    closeModal()
    fetchJobs()
  }

  return (
  <>
  <JobList jobs={jobs} updateJob={openEditModal} updateCallback={onUpdate} />
  <div class="record-button">
  <button onClick={openCreateModal}>Record New Job</button>
  </div>
     

  {isModalOpen && <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={closeModal}>&times;</span>
        <JobForm existingJob={currentJob} updateCallback={onUpdate}/>
      </div>
    </div>
  }
  </>
  );
}

export default App;
