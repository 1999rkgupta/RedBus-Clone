import React from "react";
import { Link } from "react-router-dom";
import Styles from "./_navbar.module.css";
// import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={Styles.menuBlock}>
      <ul>
        <li>
          <a href="#">Help</a>
        </li>
        <li className={Styles.manage}>
          <a href="#">
            <select
              name="manage-booking"
              id="manage-booking"
              placeholder="Manage Booking"
            >
              <option value="manage-booking">Manage Booking</option>
              <option value="">Cancel</option>
              <option value="">Show My Ticket</option>
              <option value="">Email/SMS</option>
            </select>
          </a>
        </li>
        <li className={Styles.signUp}>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
