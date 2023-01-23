import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const url = "http://localhost:3000/";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setPosts(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {posts
        ? posts.map((post, i) => {
            return (
              <>
                <h1>{post.title}</h1>
              </>
            );
          })
        : "Loading"}
    </div>
  );
}

export default App;
