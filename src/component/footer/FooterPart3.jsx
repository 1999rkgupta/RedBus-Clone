import React from "react";
import { Link } from "react-router-dom";
import Styles from "./_footer.module.css";

const FooterPart3 = () => {
  return (
    <section id={Styles.footerPart1}>
      <article>
        <div>
          <h4>Global Sites</h4>
          <ul>
            <li>
              <Link to="">India</Link>
            </li>
            <li>
              <Link to="">Singapore</Link>
            </li>
            <li>
              <Link to="">Malaysia</Link>
            </li>
            <li>
              <Link to="">Indonesia</Link>
            </li>
            <li>
              <Link to="">Peru</Link>
            </li>
            <li>
              <Link to="">Columbia</Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default FooterPart3;
