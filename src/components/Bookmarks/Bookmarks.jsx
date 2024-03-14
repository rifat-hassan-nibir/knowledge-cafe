/* eslint-disable react/prop-types */
const Bookmarks = ({ bookmarks }) => {
  console.log(bookmarks);
  return (
    <div className="lg:col-span-1">
      <h1>this is bookmarks {bookmarks.length}</h1>
    </div>
  );
};

export default Bookmarks;
