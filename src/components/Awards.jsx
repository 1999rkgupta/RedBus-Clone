import React from "react";
import Styles from "./_award.module.css";

const Awards = () => {
  return (
    <section id={Styles.awardBlock}>
      <article>
        <h2>Awards & Recognition</h2>
        <div>
          <a
            href="https://www.business-standard.com/article/companies/bs-annual-awards-saluting-the-spirit-of-entrepreneurship-114033100015_1.html"
            target="_new"
          >
            <img
              src="https://s2.rdbuz.com/web/images/home/awards/Business_Standard1.png"
              alt="Business_Standard"
            />
          </a>
          <a
            href="https://thebrandtrustreport.wordpress.com/tag/redbus-in/"
            target="_new"
          >
            <img
              src="https://s1.rdbuz.com/web/images/home/awards/Brand_Trust_Report.png"
              alt="Brand_Trust_Report"
            />
          </a>
          <a
            href="https://eyefortravelblog.blogspot.com/2014/04/winners-of-mobile-innovation-in-travel.html"
            target="_new"
          >
            <img
              src="https://s3.rdbuz.com/web/images/home/awards/Eye_for_Travel1.png"
              alt="Eye_for_Travel"
            />
          </a>
        </div>

        <div>
          <ul>
            <a
              href="https://www.business-standard.com/article/companies/bs-annual-awards-saluting-the-spirit-of-entrepreneurship-114033100015_1.html"
              target="_new"
            >
              <li>
                Most Innovative
                <br />
                Company
              </li>
            </a>
            <a
              href="https://thebrandtrustreport.wordpress.com/tag/redbus-in/"
              target="_new"
            >
              <li>
                Most Trusted
                <br />
                Brand
              </li>
            </a>
            <a
              href="https://eyefortravelblog.blogspot.com/2014/04/winners-of-mobile-innovation-in-travel.html"
              target="_new"
            >
              <li>
                Mobile Innovation
                <br />
                Award
              </li>
            </a>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Awards;
