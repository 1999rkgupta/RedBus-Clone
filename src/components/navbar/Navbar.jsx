import React from "react";
import Styles from "./_navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <article>
        {/* <Home /> */}
        {/* <Logo />
        <Menu /> */}
        <section id={Styles.headerBlock} class={Styles.fullstack_students}>
          <article class={Styles.container}>
            <nav class={Styles.leftNav}>
              <section>
                <div class={Styles.logo}>
                  <a href="#">logo</a>
                </div>
                <div class={Styles.leftmenu}>
                  <ul>
                    <li>
                      <a href="#" class={Styles.active}>
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

            <nav class={Styles.rightNav}>
              <ul>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">
                    Manage booking
                    <span>
                      <i class="fas fa-chevron-down"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i class="far fa-user-circle"></i>
                    </span>
                    <span>
                      <i class="fas fa-chevron-down after_user_circle"></i>
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
