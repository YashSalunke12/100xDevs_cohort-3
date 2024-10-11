import { useState } from "react";

const PostComponent = ({ title, imageUrl, description, price, time }) => {
  const [color, setColor] = useState("blue");
  console.log("post component");
  return (
    <>
      <img style={{ width: "300px", height: "200px" }} src={imageUrl} alt="" />
      <div style={{ padding: "20px", lineHeight: "30px", fontSize: "20px" }}>
        <h4 style={{ fontSize: "15px" }}>{title}</h4>
        <p style={{ fontSize: "10px", fontWeight: "100", color: "gray" }}>
          {description}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontSize: "20px" }}>{price}</p>
          <p>{time && new Date().toLocaleTimeString()}</p>
        </div>
        <div
          onClick={() => {
            if (color == "blue") setColor("red");
            else setColor("blue");
          }}
          style={{
            padding: "10px 70px",
            backgroundColor: color,
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          View Content
        </div>
      </div>
    </>
  );
};

export default PostComponent;
