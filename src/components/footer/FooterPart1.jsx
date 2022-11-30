import React from "react";
// import { a } from "react-router-dom";
import Styles from "./_footer.module.css";

const FooterPart1 = () => {
  return (
    <section id={Styles.footerPart1}>
      <article>
        <div>
          <h4>About redBus</h4>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Mobile Version</a>
            </li>
            <li>
              <a href="">redBus on Mobile</a>
            </li>
            <li>
              <a href="">Sitemap</a>
            </li>
            <li>
              <a href="">Offers</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Values</a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default FooterPart1;
