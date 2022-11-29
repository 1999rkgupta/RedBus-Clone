import React from "react";
import Home from "./Home";
import Logo from "./Logo";
import Menu from "./Menu";
import Styles from "./_navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <article>
        {/* <Home /> */}
        {/* <Logo />
        <Menu /> */}
        <section id="headerBlock" class="fullstack_students">
          <article class="container">
            <nav class="leftNav">
              <section>
                <div class="logo">
                  <a href="#">logo</a>
                </div>
                <div class="leftmenu">
                  <ul>
                    <li>
                      <a href="#" class="active">
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
            {/* <!----right side menu--> */}
            <nav class="rightNav">
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
        {/* <!----header block ends here--> */}

        {/* <!----slider block section starts here--> */}
        <section id="sliderBlock">
          <article>
            <div>
              <section id="searchBusesBlock">
                <article>
                  <span class="city_icon">
                    <i class="fal fa-city"></i>
                  </span>
                  <input type="text" placeholder="FROM" />
                  <span class="city_icon">
                    <i class="fal fa-city"></i>
                  </span>
                  <input type="text" placeholder="TO" />
                  <span class="city_icon date_icon">
                    <i class="far fa-calendar-alt"></i>
                  </span>
                  <input type="date" placeholder="DATE" />
                  <button>search buses</button>
                </article>
              </section>
            </div>
          </article>
        </section>

        <div
          class="first"
          data-link="https://www.redbus.in/info/OfferTerms#FIRST"
          data-slot="1"
          data-creative="promotion-banner"
        >
          <div class="fl dib promotion-image">
            <img src="https://st.redbus.in/Images/RHSS/2022/hero/100x100.png" />
          </div>

          <div class="fl dib promotion-text-wrap">
            <div class="tac promotion-header main-header-family gtm-offer-code">
              Save upto Rs 250* on your bus tickets.
            </div>
            <div class="tac promotion-description gtm-offer-desc">
              Book your favourite seat now.
            </div>
          </div>

          <section id="saveSection">
            <article className="article1">
              <ul>
                <li>
                  <span>
                    <span>Save upto Rs 300 on Ap and TS route</span>
                    <span>
                      <img src="https://st.redbus.in/images/offers/superhit_rav/1_1.png" />
                    </span>
                    <span>Use Code SUPERHIT</span>
                  </span>
                </li>
              </ul>
            </article>

            <article className="article2">
              <ul>
                <li>
                  <span>
                    <span>Save upto Rs 200 on Delhi and North routes</span>
                    <span>
                      <img src="https://st.redbus.in/Images/INDOFFER/RB200/274x148.png" />
                    </span>
                    <span>Use code RB200</span>
                  </span>
                </li>
              </ul>
            </article>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Navbar;
