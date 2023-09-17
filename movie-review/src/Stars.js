import { FaStar } from "react-icons/fa";
import React from "react";

function Stars(props) {
  const [hover, setHover] = React.useState(null);
  return (
    <div className="stars">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={ratingValue}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => props.handleClick(ratingValue)}
            />
            <FaStar
              className="star"
              color={
                ratingValue <= (hover || props.rating) ? "#ffc107" : "#e4e5e9"
              }
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
export default Stars