import React from "react";
import ReactCardFlip from "react-card-flip";

const CardStyle = {
  border: "1px solid #03506f",
  borderRadius: "30px",
  padding: "20px",
  margin: "20px",
  width: "370px",
  height: "200px",
  backgroundColor: "#fff0f5"
};

function Card(props) {
  const [isFlipped, setFlipped] = React.useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" img="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-01/cdit.jpg">
      <div
        id="card"
        style={CardStyle}
        className="CardFront"
        onClick={() => setFlipped((prev) => !prev)}
      >
        <div>
          <span className="emoji" role="img" aria-label="emojis">
            {props.emoji}
          </span>
        </div>
      </div>
      <div
        style={CardStyle}
        onClick={() => setFlipped((prev) => !prev)}
        className="CardBack"
      >
         <p>{props.back}</p>
      </div>
    </ReactCardFlip>
  );
}

export default Card;