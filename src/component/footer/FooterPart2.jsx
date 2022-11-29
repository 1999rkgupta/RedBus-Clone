import React from "react";
import { Link } from "react-router-dom";
import Styles from "./_footer.module.css";

const FooterPart2 = () => {
  return (
    <section id={Styles.footerPart1}>
      <article>
        <div>
          <h4>Info</h4>
          <ul>
            <li>
              <Link to="">T & C</Link>
            </li>
            <li>
              <Link to="">Privacy Policy</Link>
            </li>
            <li>
              <Link to="">FAQ</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="">Bus Operator Registration</Link>
            </li>
            <li>
              <Link to="">Agent Registration</Link>
            </li>
            <li>
              <Link to="">Insurance Partner</Link>
            </li>
            <li>
              <Link to="">User Agreement</Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default FooterPart2;
