import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Styles from "./_navbar.module.css";

const Navbar = () => {
  return (
    <section id={Styles.headerBlock}>
      <article className={Styles.container}>
        <Logo />
        <Menu />
      </article>
    </section>
  );
};

export default Navbar;
