import React from 'react';
import Styles from "./_navbar.module.css";

const Main = () => {
  return (
    <div>
      <section id={Styles.sliderBlock}>
        <article>
          <div>
            <section id={Styles.searchBusesBlock}>
              <article>
                <span class={Styles.city_icon}>
                  <i class="fal fa-city"></i>
                </span>
                <input type="text" placeholder="FROM" />
                <span class={Styles.city_icon}>
                  <i class="fal fa-city"></i>
                </span>
                <input type="text" placeholder="TO" />
                <span class={Styles.city_icon}>
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
              class={Styles.first}
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

              <section id={ Styles.saveSection } >
                  <article className={Styles.article1}>
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

          <article className={Styles.article2}>
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
    </div>
  );
}

export default Main