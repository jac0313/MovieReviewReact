import React from "react";
import ReviewList from "./ReviewList";
import Stars from "./Stars";

function Review(props) {
  const [starRating, setStarRating] = React.useState(null);
  const [userValue, setUserValue] = React.useState("");
  const [reviewValue, setReviewValue] = React.useState("");

  function saveReview(event) {
    event.preventDefault();
    props.setReviewData((prevData) => [
      ...prevData,
      {
        userName: userValue,
        userReview: reviewValue,
        rating: !starRating ? "0⭐" : starRating + "⭐",
      },
    ]);
    
    setUserValue("");
    setReviewValue("");
    setStarRating(null);
  }

  return (
    <div>
      <form className="review-form" onSubmit={saveReview}>
        <input
          type="text"
          placeholder="Name"
          name="userName"
          value={userValue}
          onChange={(event) => setUserValue(event.target.value)}
          required
        />
        <textarea
          placeholder="Your thoughts here..."
          name="userReview"
          value={reviewValue}
          onChange={(event) => setReviewValue(event.target.value)}
          required
        />
        <Stars handleClick={setStarRating} rating={starRating} />
        <button className="form-button">Submit your Review</button>
      </form>
      <ReviewList reviews={props.reviewData} />
    </div>
  );
}
export default Review