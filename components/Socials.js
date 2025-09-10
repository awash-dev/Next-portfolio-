import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinLine,
  RiTwitterLine,
} from "react-icons/ri";
const Socials = () => {
  return <div className='flex z-10 items-center gap-x-5 text-[20px]'>
    <Link className='hover:text-accent transition-all duration-300' href='https://youtube.com/@awash-dev?si=IFhA92EqTA7bHOnf'> <RiYoutubeLine/> </Link>
    <Link className='hover:text-accent transition-all duration-300' href='https://www.instagram.com/m0h4mm3d_hu553n/profilecard/?igsh=MWc5N3k4eXEwZnF3ZA=='> <RiInstagramLine/> </Link>
    <Link className='hover:text-accent transition-all duration-300' href='
https://www.facebook.com/mgdstudio4242?mibextid=rS40aB7S9Ucbxw6v'> <RiFacebookBoxLine/> </Link>
    <Link className='hover:text-accent transition-all duration-300' href='https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=mame4242'> <RiLinkedinLine/> </Link>
    <Link className='hover:text-accent transition-all duration-300' href='
https://www.facebook.com/mgdstudio4242?mibextid=rS40aB7S9Ucbxw6v'> <RiTwitterLine/> </Link>
  </div>;
};

export default Socials;
