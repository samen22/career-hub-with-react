import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utility/localstorage";
import { useEffect, useState } from "react";
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleFilter = filter => {
    if (filter === 'all') {
      setDisplayJobs(appliedJobs)
    }
    else if (filter === 'remote') {
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
      setDisplayJobs(remoteJobs);
    }
    else if (filter === 'onsite') {
      const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
      setDisplayJobs(onsiteJobs);
    }
  }



  useEffect(() => {
    const storedJobId = getStoredApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobId.includes(job.id))

      const jobsApplied = [];
      for (const id of storedJobId) {
        const job = jobs.find(job => job.id === id);
        if (job) {
          jobsApplied.push(job)
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);

      console.log(jobs, storedJobId, jobsApplied);
    }
  }, [jobs]);
  return (
    <div className="">
      <Helmet>
        <title>Career Hub | Applied Jobs</title>
      </Helmet>
      {/* Banner */}
      <div>
        <div className="bg-gradient-to-tr from-blue-100 to-purple-50 p-20 w-full relative overflow-hidden">
          <div className="text-center">
            <h1 className="text-2xl text-[#1A1919] font-extrabold mb-6">Applied Jobs</h1>
            <div>
              <img className="absolute top-8 -left-36 z-10" src={'/images/bg1.png'} alt="" />
              <img className="absolute -top-8 -right-28 max-w-xl z-10" src={'/images/bg2.png'} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Dropdown Menu */}
        <div className="flex justify-end items-center mt-32 mb-8 dropdown dropdown-end">
          <label tabIndex={0} className="btn m-1 capitalize">Filter By <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg></span> </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li onClick={()=> handleFilter('all')}><a>All</a></li>
            <li onClick={()=> handleFilter('remote')}><a>Remote</a></li>
            <li onClick={()=> handleFilter('onsite')}><a>Onsite</a></li>
          </ul>
        </div>
        {/* Applied Jobs list */}
        <div className="container mx-auto border-2 rounded-xl border-x-blue-100 border-y-purple-300 p-8 space-y-6 grid grid-cols-1 gap-6 mb-32">
          {
            displayJobs.map(job =>
              <div key={job.id} className="flex justify-between items-center">
                <div className="flex justify-start gap-8">
                  <div className="w-60 h-60 px-12 py-24 bg-[#F4F4F4]">
                    <img src={job.logo} alt="" />
                  </div>
                  <div>
                    <h2 className="text-[#474747] font-extrabold text-2xl mt-8">{job.job_title}</h2>
                    <p className='text-xl text-[#757575]'>{job.company_name}</p>
                    <div className='space-x-4 sm:space-y-4 text-[#7E90FE]'>
                      <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE]'>{job.remote_or_onsite}</button>
                      <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE]'>{job.job_type}</button>
                    </div>
                    <div className='flex justify-center mt-4'>
                      <h2 className='flex mr-2 text-[#757575]' ><IoLocationOutline className='text-xl'></IoLocationOutline> {job.location}</h2>
                      <h2 className='flex mr-2 text-[#757575]'><HiOutlineCurrencyDollar className='text-xl'></HiOutlineCurrencyDollar>Salary: {job.salary}</h2>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Link to={`/job/${job.id}`}>
                    <button className="btn btn-primary capitalize bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none text-white text-lg px-4 py-2">View Details</button>
                  </Link>
                </div>
              </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;