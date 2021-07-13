import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import Bookmark from "./Bookmark";

const API = apiURL();

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/bookmarks`)
      .then(
        (response) => {
          setBookmarks(response.data);
        },
        (e) => {
          console.log("axios error", e);
        }
      )
      .catch((e) => {
        console.log("caught", e);
      });
  }, []);
  return (
    <div className="Bookmarks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this bookmark</th>
            </tr>
          </thead>
          <tbody>
            {bookmarks.map((bookmark) => {
              return <Bookmark key={bookmark.id} bookmark={bookmark} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Bookmarks;
