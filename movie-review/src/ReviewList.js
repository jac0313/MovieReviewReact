 
 
 
 function ReviewList(props) {
    return (
      <div className="review-list">
        {props.reviews.map((review, index) => (
          <p className="review-items" key={index}>
            {review.userName} says "{review.userReview}" {review.rating}
          </p>
        ))}
      </div>
    );
  }
  export default ReviewList