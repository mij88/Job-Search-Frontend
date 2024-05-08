import {useState, useEffect} from 'react'
import './App.css';
import JobList from './JobList';
import JobForm from './JobForm';

function App() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetchJobs() // run fetchcode after being rendered
  }, []) //only run function after inital render

  const fetchJobs = async () =>  {

    const response = await fetch("http://127.0.0.1:5000/jobs") // fetch jobs
    const data = await response.json() // get jobs data
    setJobs(data.jobs)
    console.log(data.jobs)
    

  } 




  return <>
  
  <JobList jobs={jobs} />
  <JobForm></JobForm>
  </>
}

export default App;
