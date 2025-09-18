import React from "react";
function Card() {
  const cardStyle = {
    backgroundColor: "green",
    color: "black",
    borderRadius: "20px",
  };
  return (
    <div style={cardStyle}>
      <h2>This is an example of inline styling!</h2>
    </div>
  );
}
export default Card;