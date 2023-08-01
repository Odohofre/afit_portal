import Image from "next/image";
import afitLogo from "@/assets/afit-logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex row-span-4 col-span-4 flex-col lg:flex-row lg:items-center justify-center lg:justify-start text-white bg-royal-blue py-2.5 mb-5">
      {/* school logo */}
      <div className="flex">
        <div className="px-3.75 w-[115px]">
          <Image src={afitLogo} alt="AFIT Logo" width={110} height={100} />
        </div>
        <div className="mt-2.5 font-rockwell leading-[1.1]">
          <h1 className="text-3xl">Air Force Institute of Technology</h1>
          <h2 className="text-[#e56c3d] font-bold pl-5 text-2xl">
            ...Quest for Excellence
          </h2>
        </div>
      </div>

      <div className="ml-25 mb-2.5 text-center">
        <h2 className="font-rockwell text-3xl leading-[1.1] mt-5 mb-2.5">
          Student Portal
        </h2>
        <Link href="https://afit.edu.ng/" className="font-normal ml-25 mb-2.5">
          AFIT Main Site
        </Link>
      </div>
    </header>
  );
}
