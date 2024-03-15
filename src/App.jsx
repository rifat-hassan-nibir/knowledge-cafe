import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handlebookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleReadTime = (time, id) => {
    const newReadTime = readTime + time;
    setReadTime(newReadTime);

    const newBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(newBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="grid lg:grid-cols-3 lg:gap-[24px] lg:mt-[32px]">
        <Blogs handlebookmarks={handlebookmarks} handleReadTime={handleReadTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
