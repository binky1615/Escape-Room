
const EndScreen = () => {
    return ( 
        <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <img
          src="/ending.png"
          alt="EndScreen"
          useMap="#workmap"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <map name="workmap">
        </map>
      </div>
     );
}
 
export default EndScreen;