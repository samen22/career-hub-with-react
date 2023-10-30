
const Banner = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-100 to-purple-50 mb-32 p-20 w-full ">
      <div className="flex justify-around items-stretch space-x-7">
        <div>
          <h1 className="md:text-7xl text-5xl text-[#1A1919] font-extrabold mb-6">One Step Closer To Your <span className="text-blue-400">Dream Job</span></h1>
          <p className="md:text-lg text-xs text-[#757575] mb-8">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className="btn btn-primary capitalize bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none text-white text-xl">Get Started</button>
        </div>
        <div className="relative top-20">
          <img className="w-full h-full object-cover" src={'/images/user.png'} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;