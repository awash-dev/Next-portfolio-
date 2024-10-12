import Image from "next/image";

import Link from "next/link";

import Socials from "../components/Socials";
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]  ">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-1'>
          {/* logo */}
          <Link href='/' className='text-3xl'>
            Portfol<span className=' font-bold text-accent'>io.</span>
          </Link>

          {/* social icons */}
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
