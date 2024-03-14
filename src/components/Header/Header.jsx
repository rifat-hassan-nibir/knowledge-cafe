import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center lg:py-[32px] py-[16px] border-b-2">
      <h1 className="text-[40px] font-bold">Knowledge Cafe</h1>
      <img src={profile} className="size-[60px]" alt="" />
    </div>
  );
};

export default Header;
