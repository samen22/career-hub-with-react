import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    return (
        <div className="relative overflow-hidden">
            {/* Banner */}
            <div>
                <div className="bg-gradient-to-tr from-blue-100 to-purple-50 p-20 w-full relative">
                    <div className="text-center">
                        <div>
                            <h1 className="text-2xl text-[#1A1919] font-extrabold mb-6">Job Details</h1>
                        </div>
                        <div>
                            <img className="absolute top-0 -left-32 z-10" src="../../../public/assets/images/bg1.png" alt="" />
                            <img className="absolute -top-8 -right-28 max-w-xl z-10" src="../../../public/assets/images/bg2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Job details */}
            <div className="grid gap-4 md:grid-cols-4 p-8">
                <div className="md:col-span-3 p-10">
                    <h2 className="text-5xl text-center text-[#1A1919] font-bold mb-24">{job.company_name}</h2>
                    <p className="text-lg text-[#757575] mt-4 mb-8"><span className="text-xl text-[#1A1919] font-extrabold">Job Description: </span>{job.job_description}</p>
                    <p className="text-lg text-[#757575] mb-8"><span className="text-xl text-[#1A1919] font-extrabold">Job Responsibility: </span>{job.job_responsibility}</p>
                    <span className="text-xl text-[#1A1919] font-extrabold space-y-3">Educational Requirements: </span>
                    <p className="text-lg text-[#757575] mb-8">{job.educational_requirements}</p>
                    <p className="text-lg text-[#757575]"><span className="text-xl text-[#1A1919] font-extrabold">Experience: <br /> </span>{job.experiences}</p>
                </div>
                {/* Apply now section */}
                <div className="md:col-span-1 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-lg p-3">
                    <h3 className="mb-8 mt-8 px-3 text-xl text-[#1A1919] font-bold">Job Details</h3>
                    <div className="w-full border-t-2 border-purple-200"></div>
                    <div className="flex justify-center items-center md:space-x-2 space-x-1 mb-10 mt-8">
                        <h2 className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 6V18M9 15.182L9.879 15.841C11.05 16.72 12.949 16.72 14.121 15.841C15.293 14.962 15.293 13.538 14.121 12.659C13.536 12.219 12.768 12 12 12C11.275 12 10.55 11.78 9.997 11.341C8.891 10.462 8.891 9.038 9.997 8.159C11.103 7.28 12.897 7.28 14.003 8.159L14.418 8.489M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="url(#paint0_linear_7_406)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_7_406" x1="3" y1="11.8615" x2="21" y2="11.8615" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7E90FE" />
                                    <stop offset="1" stopColor="#9873FF" />
                                </linearGradient>
                            </defs>
                        </svg></h2>
                        <p className="text-lg text-[#757575]"><span className="text-lg text-[#1A1919]">Salary: </span>{job.salary} (per month)</p>
                    </div>
                    <div className="flex justify-center
                     space-x-2 mt-8">
                        <h2 className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z" stroke="url(#paint0_linear_7_412)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_7_412" x1="3" y1="11.8615" x2="21" y2="11.8615" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7E90FE" />
                                    <stop offset="1" stopColor="#9873FF" />
                                </linearGradient>
                            </defs>
                        </svg></h2>
                        <p className="text-lg text-[#757575]"><span className="text-lg text-[#1A1919]">Job Title: </span> {job.job_title}</p>
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1919] mt-7">Contact Information</h3>
                    <div className="w-full border-t-2 border-purple-200 mt-7"></div>
                    {/* Phone Section */}
                    <div className="flex justify-center space-x-2 mt-7">
                        <h2 className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5C20.0967 21.75 20.669 21.5129 21.091 21.091C21.5129 20.669 21.75 20.0967 21.75 19.5V18.128C21.75 17.612 21.399 17.162 20.898 17.037L16.475 15.931C16.035 15.821 15.573 15.986 15.302 16.348L14.332 17.641C14.05 18.017 13.563 18.183 13.122 18.021C11.4849 17.4191 9.99815 16.4686 8.76478 15.2352C7.53141 14.0018 6.58087 12.5151 5.979 10.878C5.817 10.437 5.983 9.95 6.359 9.668L7.652 8.698C8.015 8.427 8.179 7.964 8.069 7.525L6.963 3.102C6.90214 2.85869 6.76172 2.6427 6.56405 2.48834C6.36638 2.33397 6.1228 2.25008 5.872 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V6.75Z" stroke="url(#paint0_linear_7_465)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_7_465" x1="2.25" y1="11.85" x2="21.75" y2="11.85" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7E90FE" />
                                    <stop offset="1" stopColor="#9873FF" />
                                </linearGradient>
                            </defs>
                        </svg></h2>
                        <p className="text-lg text-[#757575]"><span className="text-lg text-[#1A1919]">Phone: </span>{job.contact_information.phone}</p>
                    </div>
                    {/* Email Section */}
                    <div className="flex justify-center space-x-1 mt-7">
                        <h2 className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.75 6.75V17.25C21.75 17.8467 21.5129 18.419 21.091 18.841C20.669 19.2629 20.0967 19.5 19.5 19.5H4.5C3.90326 19.5 3.33097 19.2629 2.90901 18.841C2.48705 18.419 2.25 17.8467 2.25 17.25V6.75M21.75 6.75C21.75 6.15326 21.5129 5.58097 21.091 5.15901C20.669 4.73705 20.0967 4.5 19.5 4.5H4.5C3.90326 4.5 3.33097 4.73705 2.90901 5.15901C2.48705 5.58097 2.25 6.15326 2.25 6.75M21.75 6.75V6.993C21.75 7.37715 21.6517 7.75491 21.4644 8.0903C21.2771 8.42569 21.0071 8.70754 20.68 8.909L13.18 13.524C12.8252 13.7425 12.4167 13.8582 12 13.8582C11.5833 13.8582 11.1748 13.7425 10.82 13.524L3.32 8.91C2.99292 8.70854 2.72287 8.42669 2.53557 8.0913C2.34827 7.75591 2.24996 7.37815 2.25 6.994V6.75" stroke="url(#paint0_linear_7_463)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_7_463" x1="2.25" y1="11.8846" x2="21.75" y2="11.8846" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7E90FE" />
                                    <stop offset="1" stop-color="#9873FF" />
                                </linearGradient>
                            </defs>
                        </svg></h2>
                        <p className="text-lg text-[#757575]"><span className="text-lg text-[#1A1919]">Email: </span>{job.contact_information.email}</p>
                    </div>
                    {/* address section */}
                    <div className="flex justify-center space-x-2 mt-7">
                        <h2 className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5Z" stroke="url(#paint0_linear_7_460)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5Z" stroke="url(#paint1_linear_7_460)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_7_460" x1="9" y1="10.4538" x2="15" y2="10.4538" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7E90FE" />
                                    <stop offset="1" stop-color="#9873FF" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_7_460" x1="4.5" y1="12.2308" x2="19.5" y2="12.2308" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7E90FE" />
                                    <stop offset="1" stop-color="#9873FF" />
                                </linearGradient>
                            </defs>
                        </svg></h2>
                        <p className="text-lg text-[#757575]"><span className="text-lg text-[#1A1919]">Address: </span>{job.contact_information.address}</p>
                    </div>
                    <div className="mt-6">
                        <button className="btn btn-primary capitalize bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none text-white text-lg px-8 py-2 w-full">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;