import Bookmark from "../Bookmark/Bookmark";

/* eslint-disable react/prop-types */
const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div>
      <div>
        <h2 className="text-[24px] font-bold py-[20px] text-center border-purple-300 border-2 rounded-lg mb-[24px]">
          Spent Time on Read: {readTime} mins
        </h2>
      </div>
      <div className="lg:col-span-1 bg-gray-100 p-[30px] rounded-lg">
        <h2 className="text-[24px] font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark bookmark={bookmark} key={idx}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
