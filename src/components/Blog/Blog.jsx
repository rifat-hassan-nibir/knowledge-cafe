import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { post_title, cover_img, author_img, author_name, reading_time, posted_date, hashtags } = blog;
  return (
    <div>
      <img src={cover_img} className="rounded-lg mb-[34px]" alt="" />
      <div className="flex justify-between">
        <div className="flex gap-[24px] items-center mb-[24px]">
          <img src={author_img} className="size-[60px] rounded-full" alt="" />
          <div>
            <h3 className="text-[24px] font-bold">{author_name}</h3>
            <p className="text-[16px] font-semibold text-[#11111199]">{posted_date}</p>
          </div>
        </div>
        <div>
          <p className="text-[20px] text-[#11111199] font-medium">{reading_time} read time</p>
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
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
