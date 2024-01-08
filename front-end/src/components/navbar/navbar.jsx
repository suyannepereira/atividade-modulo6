import { navLinks } from "@/constants/data";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-info navbar-dark navbar-expand-sm sticky-top">
      <div className="container-fluid justify-content-around">
        <a href="index.html" className="navbar-brand d-flex align-items-center">
          <i className="bi bi-airplane-engines fs-4 me-2"></i>AgeTravel
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menuNavbar">
          <div className="navbar-nav ms-auto">
            {navLinks.map(({ texto, link }, i) => (
              <Link key={i} href={link} className="nav-link active">
                {texto}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
