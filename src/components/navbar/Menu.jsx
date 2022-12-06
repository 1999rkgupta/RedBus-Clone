import React from "react";
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
              <option value="manage-booking">
                Manage Booking
              </option>
              <option value="">Cancel</option>
              <option value="">Show My Ticket</option>
              <option value="">Email/SMS</option>
            </select>
          </a>
        </li>
        <li className={Styles.signUp}>
          <a href="#">
            <span>
              <i
                className="far fa-user-circle"
                style={{ fontSize: "20px", fontWeight: "100" }}
              ></i>
              <select name="" id="">
                <option value=""></option>
                <option value="">Sign In/Sign Up</option>
              </select>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
