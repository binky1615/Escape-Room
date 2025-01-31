import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Storage = () => {
  const [popupContent, setPopupContent] = useState(null);
  const navigate = useNavigate();  // Correctly initialized navigate hook

  const handlePopup = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <img
        src="/storage.png"
        alt="Storage"
        useMap="#workmap"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "Fill",
        }}
      />
      <map name="workmap">
        <area
          shape="rect"
          coords="1350,300,975,400"
          alt="Computer"
          onClick={() => navigate("/endscreen")}
          style={{ cursor: "pointer" }}
        />
      </map>

      <img
        src="/white question mark.png"
        alt="Hint"
        onClick={() =>
          handlePopup("CLICK ON THE TRASH DEPOSIT AND LEAVE")
        }
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          width: "50px",  // You can adjust the size here
          height: "50px", // Adjust size as needed
          cursor: "pointer",
        }}
      />
      

      {/* Popup Modal */}
      {popupContent && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#18990080",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          <p>{popupContent}</p>
          <button
            onClick={closePopup}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* Background overlay */}
      {popupContent && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={closePopup}
        ></div>
      )}
    </div>
  );
};

export default Storage;
