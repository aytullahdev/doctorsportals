import React from "react";

const Navbar = () => {
  return (
    <div className=" lg:overflow-hidden">
      <div class="navbar bg-base-10 mx-5">
        <div class="navbar-start ">
          <a class="btn btn-ghost normal-case text-xl">Doctors Portal</a>
        </div>
        <div className="ml-auto mr-10">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>About</a>
              </li>
              <li>
                <a>Appointment</a>
              </li>
              <li>
                <a>Reviews</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal pr-10">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>About</a>
            </li>
            <li>
              <a>Appointment</a>
            </li>
            <li>
              <a>Reviews</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
