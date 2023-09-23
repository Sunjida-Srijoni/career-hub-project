 import { CiLocationOn } from "react-icons/ci";
 import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, job_type, salary, location, id} = job;

    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl mt-10">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-5">
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>

                <div className="mt-4 flex gap-5">
                    <h2><CiLocationOn className="text-2xl"></CiLocationOn>{location}</h2>
                    <h2><AiOutlineDollar className="text-2xl"></AiOutlineDollar>{salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;