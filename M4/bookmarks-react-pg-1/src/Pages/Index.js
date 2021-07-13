import { useEffect, useState } from "react";

function Index() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/bookmarks").then((response) => {
      setBookmarks(response.data);
    });
  }, []);

  return <h2>Index</h2>;
}

export default Index;
