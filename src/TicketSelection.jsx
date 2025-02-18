import React from "react";
import styles from "./TicketSelection.module.css";
import { Link } from "react-router-dom";

function TicketSelection() {
  return (
    <div className={styles["ticketselector-container"]}>
      <h1>Ticket Selection</h1>

      <div className={styles["ticketselector-eventinfo"]}>
        <h2>Techemer Fest '25</h2>
        <p>Join us for an unforgettable experience at LaunchPad Expo!</p>
        <p>Abuja | March 15, 2025 | 7:00 PM</p>
      </div>

      <hr />

      <div className={styles["ticketselector-ticket-types"]}>
        <h3>Select Ticket Type:</h3>
        <div className={styles["ticketselector-ticketoptions"]}>
          <label>
            <input type="radio" name="ticketType" value="free" />
            <span>
              Free <br />
              Regular Access
            </span>
          </label>
          <label>
            <input type="radio" name="ticketType" value="vip" /> <br />
            <span>
              $100 <br />
              VIP Access
            </span>
          </label>
          <label>
            <input type="radio" name="ticketType" value="vvip" /> <br />
            <span>
              $150 <br />
              VVIP Access
            </span>
          </label>
        </div>
      </div>

      <div className={styles["ticketselector-ticket-count"]}>
        <label htmlFor="ticketCount">Number of Tickets</label> <br />
        <select id="ticketCount">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className={styles["btn"]}>
        <Link to="/">
          <button className={styles["cancel-button"]}>Cancel</button>
        </Link>
        <Link to="/attendee-details">
          <button className={styles["next-button"]}>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default TicketSelection;
