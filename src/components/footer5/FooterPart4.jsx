import React from "react";
import Styles from "./_footer.module.css";

const FooterPart4 = () => {
  return (
    <section id={Styles.footerPart1}>
      <article>
        <div>
          <h4>Our Partners</h4>
          <ul>
            <li>
              <a href="">Goibibo</a>
            </li>
            <li>
              <a href="">Makemytrip</a>
            </li>
            <li>
              <h4 style={{ marginhrefp: "35px" }}>Other Services</h4>
            </li>
            <li>
              <a href="">Train Tickets</a>
            </li>
            <li>
              <a href="">Bus Hire</a>
            </li>
            <li>
              <a href="">Cab Booking</a>
            </li>
            <li>
              <a href="">Tempo Traveller</a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default FooterPart4;
