import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/">Dashboard </Link>
      </li>

      {user ? (
        <>
          <li>
            <Link to="/">{user?.photoURL}</Link>
          </li>
          <li>
            <button onClick={handleLogOut} className="btn btn-ghost">
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div
      className="navbar  bg-opacity-0 
    h-20 max-w-screen-xl mx-auto"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn  btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link
          to="/"
          className="text-blue-900 ms-6 p-10
         text-3xl  font-bold"
        >
          Language Safari
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold text-md px-1">
          {navOptions}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
