import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Styles from "./_booking.module.css";
import { FaTicketAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Cancel = () => {
  return (
    <section id={Styles.cancelBlock}>
      <article>
        <h4>Cancel Your Ticket</h4>
        <form>
          <aside>
            <div style={{ marginRight: "70px" }}>
              <span className={Styles.ticketIcon}>
                <FaTicketAlt />
              </span>
              <TextField
                id="standard-basic"
                label="ENTER TICKET NUMBER"
                variant="standard"
              />
              <br />
              <small>Please enter ticket number (TIN from your ticket)</small>
            </div>
            <div>
              <span class="cc">
                <ul
                  style={{ display: "inline" }}
                  id="selectedPhCode"
                  data-cntrycode="IND"
                  class="select_input_code"
                >
                  + 91
                </ul>
                <span class="icon icon-down">
                  <MdKeyboardArrowDown />
                </span>
              </span>
              <TextField
                id="standard-basic"
                label="ENTER MOBILE NUMBER"
                variant="standard"
              />
            </div>
          </aside>
          <div>
            <Button variant="contained" color="success">
              Select passengers
            </Button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Cancel;
