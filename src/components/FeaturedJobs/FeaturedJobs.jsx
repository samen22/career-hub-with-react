import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('../../../public/data/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, []);


    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl  text-[#1A1919] font-extrabold">Featured Jobs: {jobs.length}</h2>
                <p className="text-xl mt-4 text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-2 gap-6 mt-10">
                    {
                        jobs.map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;