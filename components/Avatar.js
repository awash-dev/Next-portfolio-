import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden  xl:flex xl:max-w-none xl:pl-40 mt-14">
      <Image
        src={"/avatar.png"}
        width={737}
        height={678}
        alt=""
        className="translate-z-0 w-full h-full xl:z-10"
      />
    </div>
  );
};

export default Avatar;
