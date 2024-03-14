/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog/";

const Blogs = ({ handlebookmarks }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="lg:col-span-2">
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id} handlebookmarks={handlebookmarks}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
