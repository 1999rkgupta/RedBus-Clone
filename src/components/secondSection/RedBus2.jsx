import React from "react";

import styles from "./_redBus.module.css";

const RedBus2 = () => {
  return (
    <section id={styles.redBus}>
      <article>
        <div className={styles.width}>
          <div className={styles.description}>
            <div className={styles.desc_group1}>
              <h1>CONVENIENCE ON-THE-GO.</h1>
            </div>

            <div className={styles.desc_group2}>
              Enjoy the following exclusive features on the redBus app <br />
              <span className="Platform-hl">Last Minute Booking</span> - In a hurry
              to book a bus at the last minute? Choose the bus passing from your
              nearest boarding point and book in a few easy steps. <br />{" "}
              <span className="Platform-hl">Boarding Point Navigation</span> - Never
              lose your way while travelling to your boarding point! <br />
              <span className="Platform-hl">Comprehensive Ticket Details </span>-
              Everything that you need to make the travel hassle free - rest
              stop details, boarding point images, chat with co-passengers,
              wake-up alarm and much more!
            </div>
            <div className={styles.desc_group3}>
              <span className="download-sms-txt">
                Enter your mobile number below to download the redBus mobile
                app.
              </span>
            </div>
            <div className={styles.desc_group4}>
              <select name="" id="">
                <option value="91">91</option>
                <option value="92">92</option>
                <option value="93">93</option>
                <option value="94">94</option>
                <option value="95">95</option>
                <option value="96">96</option>
              </select>
              <input type="text" placeholder="Enter your mobile number" />
            </div>
            <div className={styles.desc_group5}>
              <button>sms me the link</button>
            </div>

            <div className={styles.desc_group6}>
              <a href="https://apps.apple.com/in/app/redbus/id733712604">
                <img
                  src="http://s2.rdbuz.com/web/images/home/sgp/iPhone_download.png"
                  alt=""
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=in.redbus.android&hl=en">
                <img
                  src="http://s3.rdbuz.com/web/images/home/sgp/Google_download.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className={styles.img}>
            <img
              src="https://s1.rdbuz.com/web/images/home/IOS_Android_device.png"
              alt=""
            />
          </div>
        </div>
      </article>

      <img
        src="https://s2.rdbuz.com/web/images/home/city_scape_app_download.png"
        alt=""
      />
    </section>
  );
};

export default RedBus2;
