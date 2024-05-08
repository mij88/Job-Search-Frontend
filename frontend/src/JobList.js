import React from 'react'

const JobList = ({jobs, updateJob, updateCallback}) => {
    
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_job/${id}`, options)
            if (response.status == 200) {
                updateCallback()
            } else {
                console.error("Failed to delete recorded job")
            }
        } catch (error) {
            alert (error)
        }
    }

    return <div>
        <h2>Jobs</h2>
        <table class="center">
             <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Position</th>
                    <th>Job Link</th>
                    <th>Date Applied</th>
                    <th>Additional Information</th>
                </tr>

            </thead>
            <tbody>

                {jobs.map((job) => (
                       <tr key={job.id}>
                            <td>{job.companyName}</td>
                            <td>{job.position}</td>
                            <td>{job.jobLink}</td>
                            <td>{job.dateApplied}</td>
                            <td>{job.additionalInfo}</td>
                            <td>
                                <button onClick={() => updateJob(job)}>Update</button>
                                <button onClick={() => onDelete(job.id)}>Delete</button>
                            </td>
                       </tr>                                   
                ))}
            </tbody>
        </table>
    </div>
}

export default JobList