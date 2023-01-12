import React from "react";
import "./SideNav.css";

function SideNav() {
  return (
    <div
      className="col sidenav d-flex flex-column text-light p-0"
      style={{ height: "100vh", backgroundColor: "#000000" }}
    >
      <div
        className="sidenav-brand"
        style={{ height: "10vh" }}
      >
        Remote SalesFuel
      </div>
      <div className="sidenav-menu px-md-2">
        <ul className="sidenav-nav">
          <li className="sidenav-item p-2">
            <div className="sidenav-link">
              <span class="material-symbols-outlined mx-2">home</span>
              <span className="sidenav-text mx-2">DASHBOARD</span>
            </div>
          </li>
          <li className="sidenav-item  p-2 active">
            <div className="sidenav-link">
              <span class="material-symbols-outlined mx-2">school</span>
              <span className="sidenav-text mx-2">KNOWLEDGE</span>
            </div>
          </li>
          <li className="sidenav-item p-2">
            <div className="sidenav-link">
              <span class="material-symbols-outlined mx-2">group</span>
              <span className="sidenav-text mx-2">MEMBERS</span>
            </div>
          </li>
          <li className="sidenav-item p-2">
            <div className="sidenav-link">
              <span class="material-symbols-outlined mx-2">group</span>
              <span className="sidenav-text mx-2">TEAMS</span>
            </div>
          </li>
          <li className="sidenav-item p-2">
            <div className="sidenav-link">
              <span class="material-symbols-outlined mx-2">folder</span>
              <span className="sidenav-text mx-2">VAULT</span>
            </div>
          </li>
          <li className="sidenav-item p-2">
            <div className="sidenav-link">
              <span class="material-symbols-outlined mx-2">chat</span>
              <span className="sidenav-text mx-2">CHAT</span>
            </div>
          </li>
        </ul>
        <ul className="sidenav-nav">
          <li className="sidenav-item p-2">
            <div className="sidenav-link">
              <span class="material-symbols-outlined mx-2">settings</span>
              <span className="sidenav-text mx-2">SETTINGS</span>
            </div>
          </li>
          <li className="sidenav-item p-2">
            <div className="sidenav-link">
              <span class="material-symbols-outlined mx-2">corporate_fare</span>
              <span className="sidenav-text mx-2">COMPANY</span>
            </div>
          </li>
          <li className="sidenav-item p-2">
            <div className="sidenav-link">
              <span class="material-symbols-outlined mx-2">account_circle</span>
              <span className="sidenav-text mx-2">MY PROFILE</span>
            </div>
          </li>
        </ul>
      </div>
    <div className="sidenav-footer p-3">
        Powered By TeamJeenyus
    </div>
    </div>
  );
}

export default SideNav;
