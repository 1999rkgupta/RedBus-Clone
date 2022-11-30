import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import Styles from "./_footer.module.css";
// import { Link } from "react-router-dom";

const FooterPart5 = () => {
  return (
    <div className={Styles.footerPart5}>
      <img src="https://s3.rdbuz.com/web/images/home/sgp/r_logo.png" alt="" />
      <p>
        redBus is the world's largest online bus ticket booking service trusted
        by over 25 million happy customers globally. redBus offers bus ticket
        booking through its website,iOS and Android mobile apps for all major
        routes.
      </p>
      <p>
        <span className={Styles.icons}>
          <FaFacebookF />
        </span>
        <span className={Styles.icons}>
          <AiOutlineTwitter />
        </span>
      </p>
      <a href="">Ⓒ 2022 ibibogroup All rights reserved</a>
    </div>
  );
};

export default FooterPart5;
