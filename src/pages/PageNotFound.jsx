import React from "react";
import Styles from './_pageNotFound.module.css'


const PageNotFound = () => {
  return (
    <div>
      <img
        className={Styles.err}
        src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif"
        alt="ERROR 404"
      />
    </div>
  );
};

export default PageNotFound;
