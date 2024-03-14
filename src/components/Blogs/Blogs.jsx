import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h1>this is blogs</h1>
      <h2>{blogs.length}</h2>
    </div>
  );
};

export default Blogs;
