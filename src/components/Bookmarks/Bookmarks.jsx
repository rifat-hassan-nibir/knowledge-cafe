import Bookmark from "../Bookmark/Bookmark";

/* eslint-disable react/prop-types */
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="lg:col-span-1 bg-gray-100 p-[30px] rounded-lg">
      <h2 className="text-[24px] font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
