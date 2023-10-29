import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const links = <>
    <li><a><NavLink to='/'>Home</NavLink></a></li>
    <li><NavLink to='/applied'>Applied Jobs</NavLink></li>
    <li className="text-[#7E90FE]"><NavLink to='/statistics'>Statistics</NavLink></li>
    <li><NavLink to='/blogs'>Blogs</NavLink></li>
  </>
  return (
    <div className="navbar bg-gradient-to-tr from-blue-100 to-purple-50 border-none p-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <Link to={'/'}><a className="btn btn-ghost normal-case text-3xl">CareerHub</a></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn capitalize bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-lg">Start Applying</a>
      </div>
    </div>
  );
};

export default Header;