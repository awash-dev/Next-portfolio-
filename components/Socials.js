import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinLine,
  RiTwitterLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex z-10 items-center gap-x-5 text-[20px]">
      <Link
        className="hover:text-accent transition-all duration-300"
        href="https://youtube.com/@awash-dev?si=IFhA92EqTA7bHOnf"
        target="_blank"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        className="hover:text-accent transition-all duration-300"
        href="https://www.instagram.com/m0h4mm3d_hu553n/profilecard/?igsh=MWc5N3k4eXEwZnF3ZA=="
        target="_blank"
      >
        <RiInstagramLine />
      </Link>
      <Link
        className="hover:text-accent transition-all duration-300"
        href="https://www.facebook.com/mgdstudio4242?mibextid=rS40aB7S9Ucbxw6v"
        target="_blank"
      >
        <RiFacebookBoxLine />
      </Link>
      <Link
        className="hover:text-accent transition-all duration-300"
        href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=mame4242"
        target="_blank"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        className="hover:text-accent transition-all duration-300"
        href="https://www.facebook.com/mgdstudio4242?mibextid=rS40aB7S9Ucbxw6v"
        target="_blank"
      >
        <RiTwitterLine />
      </Link>

      {/* Upwork Hire Me Button */}
      <Link
        href="https://www.upwork.com/freelancers/~01b76a04c78c718c9b"
        target="_blank"
        className="ml-3 px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition-all duration-300"
      >
        Hire Me
      </Link>
    </div>
  );
};

export default Socials;
