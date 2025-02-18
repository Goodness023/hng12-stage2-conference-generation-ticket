import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AttendeeDetails.module.css";

const AttendeeDetails = () => {
  const navigate = useNavigate();

  // Initialize form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialRequest: "",
    photoPreview: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // Handle photo selection
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newPhotoPreview = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        photoPreview: newPhotoPreview,
      }));
    }
  };

  // Handle back navigation
  const handleBack = () => {
    navigate(-1);
  };

  // Handle form submission and save data to localStorage
  const handleNext = () => {
    setError("");
    setLoading(true);

    try {
      const { name, email, specialRequest, photoPreview } = formData;

      // Validate email
      if (!email || !email.trim()) throw new Error("Email is required");
      if (!/\S+@\S+\.\S+/.test(email)) throw new Error("Invalid email format");

      // Check if user already registered
      const existingUser = localStorage.getItem(email);
      if (existingUser) {
        const userData = JSON.parse(existingUser);
        if (userData?.ticketGenerated) {
          throw new Error("You have already registered!");
        }
      }

      // Store user data in localStorage
      const userData = {
        name,
        email,
        photo: photoPreview || "",
        specialRequest,
        ticketGenerated: true,
      };

      localStorage.setItem("lastRegisteredUser", email);
      localStorage.setItem(email, JSON.stringify(userData));

      // Redirect to the final step with user data
      navigate("/final-step", { state: { userData } });
    } catch (error) {
      setError(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles["containerStyle"]}>
      <div className={styles["content"]}>
        <h1>Attendee Details</h1>

        {error && <p className={styles["errorMessage"]}>{error}</p>}

        <div className={styles["photoUpload"]}>
          <label htmlFor="photoUpload">Upload Profile Photo</label>
          <input
            id="photoUpload"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>

        {formData.photoPreview && (
          <img
            src={formData.photoPreview}
            alt="Preview"
            className={styles["photoPreview"]}
          />
        )}

        <div className={styles["fieldStyle"]}>
          <label htmlFor="name">Enter your name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles["fieldStyle"]}>
          <label htmlFor="email">Enter your email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles["fieldStyle"]}>
          <label htmlFor="specialRequest">Special request?</label>
          <textarea
            id="specialRequest"
            rows={3}
            value={formData.specialRequest}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles["buttonContainerStyle"]}>
          <button onClick={handleBack} className={styles["backButtonStyle"]}>
            Back
          </button>
          <button
            onClick={handleNext}
            className={styles["nextButtonStyle"]}
            disabled={loading}
          >
            {loading ? "Processing..." : "Get My Free Ticket"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendeeDetails;
