import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/jobs'>Jobs</NavLink></li>
    <li><NavLink to='/applied' >Applied Jobs</NavLink></li>
  </>
  return (
    <nav className="navbar bg-base-100 my-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          {/* Small Devices Nav List */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>

        </div>
        <a className="font-extrabold text-3xl text-[#1A1919]">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* Large Device Nav List */}
        <ul className="gap-5 menu-horizontal px-1 font-medium text-[#757575]">
          {links}
        </ul>

      </div>
      <div className="navbar-end">
        <a className="btn font-extrabold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Start Applying</a>
      </div>
    </nav>
  );
};

export default Header;