import Image from "next/image";

import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-10 ">
      <Link
        href="/work"
        className=" relative w-[170px] h-[170px] flex justify-center items-center bg-circleStar bg-cover bf-center bg-no-repeat group "
      >
        <Image
          src="/rounded-text.png"
          width={131}
          height={138}
          className="animate-spin-slow w-full h-full max-w-[131px] max-h-[138px] "
        />
        <HiArrowRight className=" absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
