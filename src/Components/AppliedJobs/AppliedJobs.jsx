import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage"


const AppliedJobs = () => {
     
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);

    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if(filter === 'all')
        {
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote')
        {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite ==='Remote');
            setDisplayJobs(remoteJobs);

        }
        else if(filter === 'onsite')
        {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }


    useEffect( () => {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0)
        {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            setAppliedJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied);
        }
    } , [jobs])
     
    return (
        <div>
            <h1>This is Applied Jobs page: {appliedJobs.length}</h1>

            <div className="dropdown">
                <label tabIndex={0} className="btn m-1">Filter</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </div>

            <ul className="m-5 p-5 ">
                {
                    displayJobs.map(job => <li className="p-5 border-2 border-blue-300 m-5 w-2/4" key={job.id}><span>{job.job_title}<br></br> {job.company_name} <br></br>{job.remote_or_onsite}</span></li>)
                }
            </ul>
            
        </div>
    );
};

export default AppliedJobs;