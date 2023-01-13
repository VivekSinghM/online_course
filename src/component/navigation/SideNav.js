import React from "react";
import { NavLink } from "react-router-dom";
import "./SideNav.css";

function SideNav() {
  return (
    <div
      className="col sidenav d-flex flex-column text-light p-0"
      style={{ height: "100vh", backgroundColor: "#000000" }}
    >
      <div className="sidenav-brand" style={{ height: "10vh" }}>
        Remote SalesFuel
      </div>
      <div className="sidenav-menu px-md-2">
        <ul className="sidenav-nav">
          <li className="sidenav-item p-2">
            <NavLink
              to="/dashboard"
              className={(isActive) => {
                return !isActive ? "active" : "";
              }}
            >
              <din className="sidenav-link">
                <span className="material-symbols-outlined mx-2">home</span>
                <span className="sidenav-text mx-2">DASHBOARD</span>
              </din>
            </NavLink>
          </li>
          <li className="sidenav-item  p-2 active">
            <NavLink
              to="/knowledge"
              className={(isActive) => {
                return "" + !isActive ? "active" : "";
              }}
            >
              <din className="sidenav-link">
                <span className="material-symbols-outlined mx-2">school</span>
                <span className="sidenav-text mx-2">KNOWLEDGE</span>
              </din>
            </NavLink>
          </li>
          <li className="sidenav-item p-2">
            <NavLink
              to="/members"
              className={(isActive) => {
                return !isActive ? "active" : "";
              }}
            >
              <din className="sidenav-link">
                <span className="material-symbols-outlined mx-2">group</span>
                <span className="sidenav-text mx-2">MEMBERS</span>
              </din>
            </NavLink>
          </li>
          <li className="sidenav-item p-2">
            <NavLink
              to="/teams"
              className={(isActive) => {
                return !isActive ? "active" : "";
              }}
            >
              <din className="sidenav-link">
                <span className="material-symbols-outlined mx-2">group</span>
                <span className="sidenav-text mx-2">TEAMS</span>
              </din>
            </NavLink>
          </li>
          <li className="sidenav-item p-2">
            <NavLink
              to="/vault"
              className={(isActive) => {
                return !isActive ? "active" : "";
              }}
            >
              <din className="sidenav-link">
                <span className="material-symbols-outlined mx-2">folder</span>
                <span className="sidenav-text mx-2">VAULT</span>
              </din>
            </NavLink>
          </li>
          <li className="sidenav-item p-2">
            <NavLink
              to="/chat"
              className={(isActive) => {
                return !isActive ? "active" : "";
              }}
            >
              <din className="sidenav-link">
                <span className="material-symbols-outlined mx-2">chat</span>
                <span className="sidenav-text mx-2">CHAT</span>
              </din>
            </NavLink>
          </li>
        </ul>
        <ul className="sidenav-nav">
          <li className="sidenav-item p-2">
            <NavLink
              to="/settings"
              className={(isActive) => {
                return !isActive ? "active" : "";
              }}
            >
              <din className="sidenav-link">
                <span className="material-symbols-outlined mx-2">settings</span>
                <span className="sidenav-text mx-2">SETTINGS</span>
              </din>
            </NavLink>
          </li>
          <li className="sidenav-item p-2">
            <NavLink
              to="/company"
              className={(isActive) => {
                return !isActive ? "active" : "";
              }}
            >
              <din className="sidenav-link">
                <span className="material-symbols-outlined mx-2">
                  corporate_fare
                </span>
                <span className="sidenav-text mx-2">COMPANY</span>
              </din>
            </NavLink>
          </li>
          <li className="sidenav-item p-2">
            <NavLink
              to="/my_profile"
              className={(isActive) => {
                return !isActive ? "active" : "";
              }}
            >
              <din className="sidenav-link">
                <span className="material-symbols-outlined mx-2">
                  account_circle
                </span>
                <span className="sidenav-text mx-2">MY PROFILE</span>
              </din>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="sidenav-footer p-3">Powered By TeamJeenyus</div>
    </div>
  );
}

export default SideNav;
