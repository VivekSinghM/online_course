import React from "react";

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg border-bottom justify-content-between pr-4 pl-5">
      <span className="navbar-brand ">
        KNOWLEDGE
      </span>
      <div className="form-inline">
        <button
          className="my-2 my-sm-0 py-1 px-2 text-white"
          style={{
            backgroundColor: "#389dd1",
            fontSize: ".9em",
            border: "1px solid #2e546a",
            borderRadius: 0,
          }}
        >
          <span>CREATE COURSE</span>
        </button>
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
            <button className="dropdown-item" type="button">
              Profile
            </button>
            <button className="dropdown-item" type="button">
              option 2
            </button>
            <button className="dropdown-item" type="button">
              setting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
