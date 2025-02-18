import React from "react";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className={styles["homepage-container"]}>
        <div className={styles["homepage-card"]}>
          <h1>
            Generate Your <br /> Conference Ticket <br /> Instantly!{" "}
          </h1>
          <p>
            Fill in your details and get your personalized <br /> conference
            details in seconds.
          </p>
          <Link to="/ticket-selection">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homepage;
