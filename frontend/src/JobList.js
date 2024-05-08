import React from 'react'

const JobList = ({jobs}) => {

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

                {jobs.map((jobs) => (
                       <tr key={jobs.id}>
                            <td>{jobs.companyName}</td>
                            <td>{jobs.position}</td>
                            <td>{jobs.jobLink}</td>
                            <td>{jobs.dateApplied}</td>
                            <td>{jobs.additionalInfo}</td>
                            <td>
                                <button>Update</button>
                                <button>Delete</button>
                            </td>
                       </tr>                                   
                ))}
            </tbody>
        </table>
    </div>
}

export default JobList