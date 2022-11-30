import React from "react";
// import { Link } from "react-router-dom";
// import Cancel from "../manageBookingPart/Cancel";
import FooterPart1 from "./FooterPart1";
import FooterPart2 from "./FooterPart2";
import FooterPart3 from "./FooterPart3";
import FooterPart4 from "./FooterPart4";
import FooterPart5 from "./FooterPart5";
import Styles from "./_footer.module.css";

const Footer = () => {
  return (
    <section id={Styles.footerMain}>
      <article>
        <FooterPart1 />
        <FooterPart2 />
        <FooterPart3 />
        <FooterPart4 />
        <FooterPart5 />
      </article>
    </section>
  );
};

export default Footer;
