/* eslint-disable react/prop-types */
const Bookmark = ({ bookmark }) => {
  const { post_title } = bookmark;
  return (
    <div className="bg-white p-[20px] mt-[16px] rounded-lg">
      <h1 className="text-[18px] font-semibold">{post_title}</h1>
    </div>
  );
};

export default Bookmark;
