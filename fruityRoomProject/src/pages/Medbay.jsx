import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Ensure this is correctly imported

const HomePage = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [showCodePopup, setShowCodePopup] = useState(false);
  const [enteredCode, setEnteredCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handlePopup = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
    setShowCodePopup(false);
    setErrorMessage(""); // Clear error message when closing
  };

  const handleCodeSubmit = () => {
    if (enteredCode === "5292") {
      navigate("/secret");
    } else {
      setErrorMessage("Incorrect code. Try again.");
    }
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <img
        src="/medbay.png"
        alt="Medbay"
        useMap="#workmap"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <map name="workmap">
        <area
          shape="rect"
          coords="1250,100,1500,400"
          alt="panel"
          onClick={() => setShowCodePopup(true)} // Show input popup
          style={{ cursor: "pointer" }}
        />
      </map>

      <img
        src="/white question mark.png"
        alt="Hint"
        onClick={() => handlePopup("There doesn't seem to be anything to do in this room and the door is already open...")}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          width: "50px",  // You can adjust the size here
          height: "50px", // Adjust size as needed
          cursor: "pointer",
        }}
      />

        <img
          src="/next area.png"
          alt="Next Area"
          onClick={() => navigate("/caferun")}
          style={{
            position: "fixed",
            top: "0px",
            left: "30vw",
            width: "100px",  // You can adjust the size here
            height: "200px", // Adjust size as needed
            transform: "rotate(-90deg)", // Rotate the image 90 degrees
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
          <p dangerouslySetInnerHTML={{ __html: popupContent }}></p>
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

      {/* Code Input Popup */}
      {showCodePopup && (
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
            textAlign: "center",
          }}
        >
          <p>Enter the code to unlock the door:</p>
          <input
            type="text"
            value={enteredCode}
            onChange={(e) => setEnteredCode(e.target.value)}
            style={{
              padding: "5px",
              margin: "10px",
              borderRadius: "5px",
              border: "1px solid black",
            }}
          />
          <br />
          <button
            onClick={handleCodeSubmit}
            style={{
              padding: "10px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Submit
          </button>
          <button
            onClick={closePopup}
            style={{
              padding: "10px 20px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          {errorMessage && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>}
        </div>
      )}

      {/* Background overlay */}
      {(popupContent || showCodePopup) && (
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

export default HomePage;
