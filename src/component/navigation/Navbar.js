import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg border-bottom justify-content-between pr-4 pl-5">
      <span className="navbar-brand ">
        KNOWLEDGE
      </span>
      <div className="form-inline">
        <Link
          to="/create_course"
          className="my-2 my-sm-0 py-1 px-2 text-white"
          style={{
            backgroundColor: "#389dd1",
            fontSize: ".9em",
            border: "1px solid #2e546a",
            borderRadius: 0,
          }}
        >
          <span>CREATE COURSE</span>
        </Link>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          className="img-fluid rounded-circle mx-3"
          alt="profile"
          style={{ maxWidth: "45px" }}
        ></img>

        <div className="btn-group">
          <div
          className="nav-link px-1 h-100 d-flex align-items-center"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          >
          <span
            className="material-symbols-outlined"
            style={{cursor:"pointer"}}
          >
            more_vert
          </span>
          </div>
          <div className="dropdown-menu dropdown-menu-right">
            <Link to="/profile" className="dropdown-item" type="button">
              Profile
            </Link>
            <Link to="/O2" className="dropdown-item" type="button">
              option 2
            </Link>
            <Link to="/settings" className="dropdown-item" type="button">
              settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
