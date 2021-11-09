/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

// styles 

import "../../styles/ifood.scss"

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-red-600 top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <Link
              className="w-full px-4 flex-1"
              to="/"
            >
              <img
                alt="..."
                className="w-5 mr-1 pt-2 pb-2 ifood-logo"
                src={require("assets/img/ifood-logo.png").default}
              />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav >
    </>
  );
}
