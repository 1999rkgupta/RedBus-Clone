import React from "react";
import Styles from "./_navbar.module.css";

const Logo = () => {
  return (
    <div className={Styles.logoBlock}>
      <ul>
        <li className={Styles.logo}>
          <a>
            <img src="" alt="" />
          </a>
        </li>
        <li className={Styles.leftMenu}>
          <ul>
            <li>
              <a className={Styles.active}>BUS TICKETS</a>
            </li>
            <li>
              <a>
                rYde <sup>new</sup>
              </a>
            </li>
            <li>
              <a>
                reRail <sup>new</sup>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Logo;
