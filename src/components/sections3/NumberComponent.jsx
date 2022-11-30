import React from "react";
import Styles from "./_award.module.css";

const NumberComponent = () => {
  return (
    <section id={Styles.NumberComponent}>
      <article>
        <h2>The Numbers are Growing!</h2>
        <div className={Styles.grow}>
          <div>
            <h4>Customers</h4>
            <h3>36 M</h3>
            <p>
              redBus is trusted by over 36
              <br />
              million happy customers
              <br />
              globally
            </p>
          </div>
          <div>
            <h4>Operators</h4>
            <h3>3500</h3>
            <p>
              network of over 3500 bus
              <br />
              operators worldwide
            </p>
          </div>
          <div>
            <h4>Bus Tickets</h4>
            <h3>220+ M</h3>
            <p>
              Over 220 million trips
              <br />
              booked using redBus
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default NumberComponent;
