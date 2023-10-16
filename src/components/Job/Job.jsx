import PropTypes from 'prop-types';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='w-28 h-10 mt-10' src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-[#474747] font-extrabold text-2xl">{job_title}</h2>
                <p className='text-xl text-[#757575]'>{company_name}</p>
                <div className='space-x-4 sm:space-y-4 text-[#7E90FE]'>
                    <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE]'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE]'>{job_type}</button>
                </div>
                <div className='flex justify-center mt-4'>
                    <h2 className='flex mr-2 text-[#757575]' ><IoLocationOutline className='text-xl'></IoLocationOutline> {location}</h2>
                    <h2 className='flex mr-2 text-[#757575]'><HiOutlineCurrencyDollar className='text-xl'></HiOutlineCurrencyDollar>Salary: {salary}</h2>
                </div>
                <div className="card-actions mx-auto mt-6">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary capitalize bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none text-white text-lg px-4 py-2">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired
}

export default Job;