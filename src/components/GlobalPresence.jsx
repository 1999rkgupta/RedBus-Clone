import React from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Styles from "./_award.module.css";
const GlobalPresence = () => {
  return (
    <section id={Styles.GlobalPresence}>
      <article>
        <h2>OUR GLOBAL PRESENCE</h2>
        <div className={Styles.flags}>
          <div>
            <figure>
              <a
                href="https://www.redbus.co/"
                target="_new"
                className="fi fi-co"
              ></a>
              <a href="https://www.redbus.co/">
                <figcaption className={Styles.country}>COLOMBIA</figcaption>
              </a>
            </figure>
          </div>
          <div>
            <figure>
              <a
                href="https://www.redbus.co/"
                target="_new"
                className="fi fi-in"
              ></a>
              <a href="https://www.redbus.id/">
                <figcaption className={Styles.country}>INDIA</figcaption>
              </a>
            </figure>
          </div>
          <div>
            <figure>
              <a
                href="https://www.redbus.co/"
                target="_new"
                className="fi fi-id"
              ></a>
              <a href="https://www.redbus.id/">
                <figcaption className={Styles.country}>INDONESIA</figcaption>
              </a>
            </figure>
          </div>
        </div>

        <div className={Styles.flags}>
          <div>
            <figure>
              <a href="https://www.redbus.co/" target="_new">
                <span class="fi fi-my"></span>
              </a>
              <a href="https://www.redbus.id/">
                <figcaption className={Styles.country}>MALAYSIA</figcaption>
              </a>
            </figure>
          </div>
          <div>
            <figure>
              <a href="https://www.redbus.co/" target="_new">
                <span class="fi fi-pe"></span>
              </a>
              <a href="https://www.redbus.id/">
                <figcaption>PERU</figcaption>
              </a>
            </figure>
          </div>
          <div>
            <figure>
              <a href="https://www.redbus.co/" target="_new">
                <span class="fi fi-sg"></span>
              </a>
              <a href="https://www.redbus.id/">
                <figcaption>SINGAPORE</figcaption>
              </a>
            </figure>
          </div>
        </div>
      </article>
    </section>
  );
};

export default GlobalPresence;
