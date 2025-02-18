import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./FinalStep.module.css";

function FinalStep() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let data = location.state?.userData;

    if (!data) {
      const lastEmail = localStorage.getItem("lastRegisteredUser");
      if (lastEmail) {
        const storedData = localStorage.getItem(lastEmail);
        if (storedData) {
          data = JSON.parse(storedData);
        }
      }
    }

    if (data) {
      setUserData(data);
    } else {
      navigate("/", { replace: true }); 
    }
  }, [location, navigate]);

  if (!userData) return <p>Loading...</p>; 

  return (
    <div className={styles.container}>
      <h1>Your Ticket is Booked!</h1>
      <p>
        Check your email for a copy or <strong>download</strong> it below.
      </p>

      <div className={styles.ticket}>
        <h2>Techemer Fest '25</h2>
        <p>
          <strong>📍 Location:</strong> Ladi Kwali Street, Area 1, Garki, Abuja, Nigeria.
        </p>
        <p>
          <strong>📅 Date:</strong> March 15, 2025 | 7:00 PM
        </p>

        {userData.photo && (
          <img
            src={userData.photo}
            alt="Profile"
            className={styles.profilePhoto}
          />
        )}

        <div className={styles.ticketDetails}>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Ticket Type:</strong> VIP
          </p>
          <p>
            <strong>Special Request:</strong> {userData.specialRequest || "N/A"}
          </p>
        </div>
      </div>

      <div className={styles.buttons}>
        <button onClick={() => navigate("/")} className={styles.BookButton}>
          Book Another Ticket
        </button>
        <button className={styles.DownloadButton}>Download Ticket</button>
      </div>
    </div>
  );
}

export default FinalStep;
