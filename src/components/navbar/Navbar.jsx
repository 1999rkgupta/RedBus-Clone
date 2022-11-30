import React from "react";
import Styles from "./_navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <article>
        {/* <Home /> */}
        {/* <Logo />
        <Menu /> */}
        <section id={Styles.headerBlock} className={Styles.fullstack_students}>
          <article className={Styles.container}>
            <nav className={Styles.leftNav}>
              <section>
                <div className={Styles.logo}>
                  <a href="#">logo</a>
                </div>
                <div className={Styles.leftmenu}>
                  <ul>
                    <li>
                      <a href="#" className={Styles.active}>
                        BUS TICKETS
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        rYde <sup>new</sup>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        reRail <sup>new</sup>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </nav>

            <nav className={Styles.rightNav}>
              <ul>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">
                    Manage booking
                    <span>
                      <i className="fas fa-chevron-down"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i className="far fa-user-circle" id="icon"></i>
                    </span>
                    <span>
                      <i className="fas fa-chevron-down after_user_circle"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </article>
        </section>
      </article>
    </div>
  );
};

export default Navbar;
