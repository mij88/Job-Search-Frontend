import {useState} from "react"

const JobForm = ({existingJob = {}, updateCallback}) => {

    const [companyName, setCompanyName] = useState(existingJob.companyName || "");
    const [position, setPosition] = useState(existingJob.position || "");
    const [dateApplied, setDateApplied] = useState(existingJob.dateApplied || "");
    const [jobLink, setJobLink] = useState(existingJob.jobLink || "");
    const [additionalInfo, setAdditionalInfo] = useState(existingJob.additionalInfo || "");

   //if existing job has an entry that means it is updating if not then it is recording new job 
    const updating = Object.entries(existingJob).length !== 0; 
 

    const onSubmit = async (e) => {
        e.preventDefault() //do not refresh page yet

        const data = {
            companyName,
            position,
            dateApplied,
            jobLink,
            additionalInfo
        }

        const url = "http://127.0.0.1:5000/" + (updating ? `update_job/${existingJob.id}`: "add_job")

        const options = {
            method: updating ? "PATCH": "POST", 
            headers: {
                "Content-Type": "application/json" //telling api sending json
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        } else {
            updateCallback()
        }

    }
    return (
     
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="companyName">Company Name</label>
                <input 
                    type="text" 
                    id="companyName" 
                    value={companyName} 
                    onChange={(e) => setCompanyName(e.target.value)}> 
                </input>
            </div>

            <div>
                <label htmlFor="position">Position</label>
                <input 
                    type="text" 
                    id="position" 
                    value={position} 
                    onChange={(e) => setPosition(e.target.value)}> 
                </input>
            </div>

            <div>
                <label htmlFor="dateApplied">Date Applied</label>
                <input 
                    type="text" 
                    id="dateApplied" 
                    value={dateApplied} 
                    onChange={(e) => setDateApplied(e.target.value)}> 
                </input>
            </div>

            
            <div>
                <label htmlFor="jobLink">Job Link</label>
                <input 
                    type="text" 
                    id="jobLink" 
                    value={jobLink} 
                    onChange={(e) => setJobLink(e.target.value)}> 
                </input>
            </div>

            <div>
                <label htmlFor="additionalInfo">Additional Information</label>
                <input 
                    type="text" 
                    id="additionalInfo" 
                    value={additionalInfo} 
                    onChange={(e) => setAdditionalInfo(e.target.value)}> 
                </input>
            </div>

            <button type="submit">{updating ? "Update" : "Record"}</button>

    </form>
    )
   

}

export default JobForm