import { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { toast } from "react-toastify";
import Reviews from "./Reviews.js";

const API = apiURL();

function BookmarkDetails({ history, match }) {
  const [bookmark, setBookmark] = useState([]);

  // Let's figure out how to grab the
  // bookmark id from the current path

  const { id } = match.params;

  useEffect(() => {
    axios
      .get(`${API}/bookmarks/${id}`)
      .then((response) => {
        setBookmark(response.data);
      })
      .catch((e) => {
        console.error(e);
        // use the history object!
        history.push("/not-found");
      });
  }, []);

  // 1. delete bookmark from database
  //     2a. if successful, redirect user to /bookmarks
  //     2b. if unsuccessful, log error and maybe use react-toastify to notify user
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${API}/bookmarks/${id}`);
      history.push("/bookmarks");
      // do we need to update our frontend application state by deleting the bookmark?
    } catch (e) {
      console.error(e);
      toast.error("Could not delete bookmark");
    }
  };

  return (
    <article>
      <h3>{bookmark.name}</h3>
      <Link to="/bookmarks">
        <button>Back</button>
      </Link>
      <Link to={`/bookmarks/${bookmark.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
      <Reviews />
    </article>
  );
}

export default withRouter(BookmarkDetails);
