import React from "react";
import { Link } from "react-router-dom";
import Styles from "./_footer.module.css";

const FooterPart1 = () => {
  return (
    <section id={Styles.footerPart1}>
      <article>
        <div>
          <h4>About redBus</h4>
          <ul>
            <li>
              <Link to="">About Us</Link>
            </li>
            <li>
              <Link to="">Contact Us</Link>
            </li>
            <li>
              <Link to="">Mobile Version</Link>
            </li>
            <li>
              <Link to="">redBus on Mobile</Link>
            </li>
            <li>
              <Link to="">Sitemap</Link>
            </li>
            <li>
              <Link to="">Offers</Link>
            </li>
            <li>
              <Link to="">Careers</Link>
            </li>
            <li>
              <Link to="">Values</Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default FooterPart1;
