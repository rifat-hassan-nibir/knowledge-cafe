import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog/";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="lg:col-span-2">
      <h1>this is blogs {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
