import React from "react";
import { Styles } from "./Styles";

const AdmissionModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <Styles>
      <div className="modal-container">
        <div className="modal-content">
          {/* Close Button */}
          <button
            className="modal-close-btn"
            aria-label="Close admissions popup"
            onClick={onClose}
          >
            ×
          </button>

          {/* LEFT SIDE - Image with overlay text */}
          <div className="modal-left">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/applynow.JPG"}
              alt="Students in classroom"
              className="modal-image"
            />
            <div className="modal-left-content">
              <h2>Welcome to</h2>
              <h3>Admissions</h3>
              <p>Join us and explore an exceptional learning journey.</p>
            </div>
          </div>

          {/* RIGHT SIDE - Text content and button */}
          <div className="modal-right">
            <h2>Admissions Open for 2025</h2>
            <p>
              Enroll now to secure your spot for the upcoming academic session.
              Join a community of excellence and innovation. Take the first
              step toward a brighter future!
            </p>
            <a href={process.env.PUBLIC_URL + "/registration"} className="apply-now-btn">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default AdmissionModal; 