import React from "react";

const Seats = () => {
  return (
    <section class="mainSectionBlock">
      <article class="articleBlock">
        <div class="busBlock">
          <div class="dateBlock" id="date"></div>

          <div class="container">
            <div class="row" id="maindiv"></div>
          </div>

          <div class="container" id="msg"></div>

          <div class="container" id="uiData">
            Ticket No : <span id="no"></span>
            <br />
            Ticket Amount : &#8377 <span id="amount"></span>
          </div>
        </div>
        <div class="borderLeft"></div>
        <div class="borderBottom"></div>
        <div class="circle"></div>
        <div class="triangle"></div>
      </article>
        </section>
  );
};

export default Seats;
