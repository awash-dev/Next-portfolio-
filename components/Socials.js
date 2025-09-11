import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiBriefcaseLine,
} from "react-icons/ri";

const socials = [
  {
    href: "https://youtube.com/@awash-dev?si=IFhA92EqTA7bHOnf",
    icon: <RiYoutubeLine />,
    label: "YouTube",
  },
  {
    href: "https://www.instagram.com/m0h4mm3d_hu553n/profilecard/?igsh=MWc5N3k4eXEwZnF3ZA==",
    icon: <RiInstagramLine />,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/mgdstudio4242?mibextid=rS40aB7S9Ucbxw6v",
    icon: <RiFacebookBoxLine />,
    label: "Facebook",
  },
  {
    href: "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=mame4242",
    icon: <RiLinkedinLine />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/", // replace with your real profile
    icon: <RiTwitterLine />,
    label: "Twitter",
  },
];

const Socials = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 mb-4">
      {/* Social Icons */}
      <div className="flex items-center gap-3 sm:gap-5 text-xl sm:text-2xl">
        {socials.map(({ href, icon, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            aria-label={label}
            className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-110"
          >
            {icon}
          </Link>
        ))}
      </div>

      {/* Hire Me Button */}
      <Link
        href="https://www.upwork.com/freelancers/~01b76a04c78c718c9b"
        target="_blank"
        className="group flex items-center gap-2 px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-110"
      >
        <RiBriefcaseLine className="text-lg group-hover:rotate-12 transition-transform duration-300" />
        Hire Me
      </Link>
    </div>
  );
};

export default Socials;