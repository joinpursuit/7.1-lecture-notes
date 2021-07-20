// DEPENDENCIES
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const API = apiURL();

function Reviews() {
  const [reviews, setReviews] = useState([]);
  let { id } = useParams();

  // FUNCTIONS
  const handleAdd = (newReview) => {
    axios
      .post(`${API}/bookmarks/${id}/reviews`, newReview)
      .then(
        (response) => {
          setReviews([response.data, ...reviews]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = (reviewId) => {
    axios
      .delete(`${API}/bookmarks/${id}/reviews/${reviewId}`)
      .then(
        (response) => {
          // create a copy of the reviews
          const copyReviewArray = [...reviews];
          // get the index of the review to delete from state
          const indexDeletedReview = copyReviewArray.findIndex((review) => {
            return review.id === reviewId;
          });
          //remove the deleted review from the copied array
          copyReviewArray.splice(indexDeletedReview, 1);
          // set the state of reviews to the copied array (now with one review missin)
          setReviews(copyReviewArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedReview) => {
    axios
      .put(`${API}/bookmarks/${id}/reviews/${updatedReview.id}`, updatedReview)
      .then(
        (response) => {
          const copyReviewArray = [...reviews];
          const indexUpdatedReview = copyReviewArray.findIndex((review) => {
            return review.id === updatedReview.id;
          });
          copyReviewArray[indexUpdatedReview] = response.data;
          setReviews(copyReviewArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios.get(`${API}/bookmarks/${id}/reviews`).then((response) => {
      setReviews(response.data);
    });
  }, [id]);

  return (
    <section className="Reviews">
      <h2>Reviews</h2>
      <ReviewForm handleSubmit={handleAdd}>
        <h3>Add a New Review</h3>
      </ReviewForm>
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleSubmit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </section>
  );
}

// EXPORTS
export default Reviews;
