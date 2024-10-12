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
    <Link className='hover:text-accent transition-all duration-300' href=''> <RiYoutubeLine/> </Link>
    <Link className='hover:text-accent transition-all duration-300' href=''> <RiInstagramLine/> </Link>
    <Link className='hover:text-accent transition-all duration-300' href=''> <RiFacebookBoxLine/> </Link>
    <Link className='hover:text-accent transition-all duration-300' href=''> <RiLinkedinLine/> </Link>
    <Link className='hover:text-accent transition-all duration-300' href=''> <RiTwitterLine/> </Link>
  </div>;
};

export default Socials;
