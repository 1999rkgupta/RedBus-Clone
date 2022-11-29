import React from "react";
import { Link } from "react-router-dom";
import Styles from "./_footer.module.css";

const FooterPart4 = () => {
  return (
    <section id={Styles.footerPart1}>
      <article>
        <div>
          <h4>Our Partners</h4>
          <ul>
            <li>
              <Link to="">Goibibo</Link>
            </li>
            <li>
              <Link to="">Makemytrip</Link>
            </li>
            <li>
              <h4 style={{ marginTop: "35px" }}>Other Services</h4>
            </li>
            <li>
              <Link to="">Train Tickets</Link>
            </li>
            <li>
              <Link to="">Bus Hire</Link>
            </li>
            <li>
              <Link to="">Cab Booking</Link>
            </li>
            <li>
              <Link to="">Tempo Traveller</Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default FooterPart4;
