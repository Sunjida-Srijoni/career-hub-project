import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localstorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    console.log(id, jobs);
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const {job_title, job_responsibility, job_description, educational_requirements, experiences} = job;

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast("You have already apply this job");

    }
    return (
        <div>
            <h1>Job details of : {job_title}</h1>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                      <div className="mt-10">
                <h1 className="font-bold">Job Description</h1>
                {
                    job_description
                }
            </div>

            <div className="mt-10">
                <h1 className="font-bold">Job Responsibility</h1>
                {
                    job_responsibility
                }
            </div>

            <div className="mt-10">
                <h1 className="font-bold">Educational Requirement</h1>
                {
                    educational_requirements
                }
            </div>

            <div className="mt-10">
                <h1 className="font-bold">Experiences</h1>
                {
                    experiences
                }
            </div>
                </div>

                <div className="border p-4">
                    <h1 className="font-bold pb-4">Job Details</h1>
                    <hr></hr>
                    <h1 className="pt-4 pb-2"><span className="font-bold">Salary: </span>{job.salary}</h1>
                    <h1 className="pb-2"><span className="font-bold">Job Title: </span>{job.job_title}</h1>

                    <h1 className="font-bold pb-4">Contact Information</h1>
                    <hr></hr>

                    <h1 className="pt-4 pb-2"><span className="font-bold">Phone: </span>{job.contact_information.phone}</h1>
                    <h1 className="pb-2"><span className="font-bold">Email: </span>{job.contact_information.email}</h1>
                    <h1 className="pb-2"><span className="font-bold">Address: </span>{job.contact_information.address}</h1>

                    <button onClick={handleApplyJob} className="btn btn-primary">Apply Now</button>
                    

                </div>
                
            </div>
            <ToastContainer />
          
            
        </div>
    );
};

export default JobDetails;