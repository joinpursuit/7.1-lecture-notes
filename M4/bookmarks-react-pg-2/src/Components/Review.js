import { useState } from "react";
import ReviewForm from "./ReviewForm.js";

function Review(props) {
  const { review, handleSubmit } = props;
  const [viewEditForm, toggleEditForm] = useState(false);
  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className="Review">
      {/* update code */}
      <button onClick={toggleView}>Edit</button>
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <h4>
            {review.title} <span>{review.rating}</span>
          </h4>
          <h5>{review.reviewer}</h5>
          <p>{review.content}</p>
          <button onClick={() => props.handleDelete(review.id)}>X</button>
        </div>
      )}
    </div>
  );
}

export default Review;
