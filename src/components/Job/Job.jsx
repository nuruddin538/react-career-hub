import { CiLocationOn } from 'react-icons/ci';
import { BsCurrencyDollar } from 'react-icons/Bs';
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
  } = job;
  return (
    <div className="card bg-base-100 shadow-xl mt-5">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="mt-4">
          <div className="flex justify-between my-3">
            <h2 className="flex">
              <CiLocationOn className="text-xl mr-2"></CiLocationOn>
              {location}
            </h2>
            <h2 className="flex">
              <BsCurrencyDollar className="text-xl mr-2"></BsCurrencyDollar>
              {salary}
            </h2>
          </div>
          <div className="card-actions justify-start">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
