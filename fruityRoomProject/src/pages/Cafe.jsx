import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Cafe = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [itemFound, setItemFound] = useState(false);
  const navigate = useNavigate();  

  const handlePopup = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  const handleItemFound = () => {
    setItemFound(true);
    handlePopup("You found the key! Now you can progress.");
  };

  const handleProgress = () => {
    if (itemFound) {
      navigate("/admin");  // Only navigate if the item is found
    } else {
      handlePopup("You need to find the key first!");
    }
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <img
        src="/cafe.png"
        alt="Cafe"
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
          coords="400,10,550,100"
          alt="Computer"
          onClick={() => handlePopup("Nope! no key here bucko")}
          style={{ cursor: "pointer" }}
        />
        <area
          shape="rect"
          coords="350,680,425,640"
          alt="Tray"
          onClick={() => handlePopup("Nope! no key here bucko")}
          style={{ cursor: "pointer" }}
        />
        <area
          shape="rect"
          coords="450,725,550,660"
          alt="Cup"
          onClick={() => {
            handleItemFound(); // Mark item as found when clicked
          }}
          style={{ cursor: "pointer" }}
        />
      </map>

      <img
        src="/question mark.png"
        alt="Hint"
        onClick={() =>
          handlePopup("The door is closed! Find a key in one of the items on the tables")
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
      
      {itemFound && (  // Only show if the item is found
        <img
          src="/next area.png"
          alt="Next Area"
          onClick={handleProgress}  // Progress to the next area
          style={{
            position: "fixed",
            bottom: "0px",
            left: "45vw",
            width: "100px",  // You can adjust the size here
            height: "200px", // Adjust size as needed
            transform: "rotate(90deg)", // Rotate the image 90 degrees
            cursor: "pointer",
          }}
        />
      )}

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

export default Cafe;
