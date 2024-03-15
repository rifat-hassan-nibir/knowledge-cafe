/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({ blog, handlebookmarks, handleReadTime }) => {
  const { id, post_title, cover_img, author_img, author_name, reading_time, posted_date, hashtags } = blog;
  return (
    <div className="mb-[80px]">
      <img src={cover_img} className="rounded-lg mb-[34px] w-full h-[450px]" alt="" />
      <div className="flex justify-between">
        <div className="flex gap-[24px] items-center mb-[24px]">
          <img src={author_img} className="size-[60px] rounded-full" alt="" />
          <div>
            <h3 className="text-[24px] font-bold">{author_name}</h3>
            <p className="text-[16px] font-semibold text-[#11111199]">{posted_date}</p>
          </div>
        </div>
        <div>
          <span className="text-[20px] text-[#11111199] font-medium ">{reading_time} read time </span>
          <button onClick={() => handlebookmarks(blog)} className="text-[20px] ml-3">
            <IoBookmarkOutline />
          </button>
        </div>
      </div>
      <h1 className="text-[40px] font-bold">{post_title}</h1>
      <p className="mb-[21px]">
        {hashtags.map((hash, idx) => (
          <span className="text-[#11111199] text-[20px] font-medium" key={idx}>
            <a href="">#{hash} </a>
          </span>
        ))}
      </p>
      <div>
        <button onClick={() => handleReadTime(reading_time, id)} className="underline text-[24px] text-blue-500">
          Mark as read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
