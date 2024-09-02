'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.svg';
import rightArrow from '../assets/right arrow icon.svg';
import arrowDown from '../assets/arrowdown.svg';

type Links = string[];

const Navbar = () => {
 return (
  <nav className="fixed top-0 w-screen py-4 px-4 md:px-8 2xl:px-[220px] flex items-center justify-between z-10 bg-darkblue ">
   <Image src={logo} alt="whitepace logo" className="w-[134px] md:w-[234px]" />
   <ul className="hidden lg:flex flex-row gap-x-8 ">
    <ListNavLinks Links={['Products', 'Solutions', 'Resources', 'Pricing']} />
   </ul>
   <div className="flex items-center justify-center gap-x-3">
    <div className="hidden md:flex items-center justify-center gap-x-3">
     <button className="px-[40px] py-[16px] text-darkblue font-bold bg-lightyellow rounded-lg">
      Login
     </button>
     <button className="flex items-center justify-center text-[12px] sm:text-[18px] text-white bg-blue rounded-lg px-[22px] py-[12px] ">
      Try Whitepace free
      <Image src={rightArrow} alt="right arrow icon" className="max-w-[34px]" />
     </button>
    </div>
    <div className="w-[42px] h-6 lg:hidden flex flex-col gap-y-2">
     <div className="bg-white w-full h-3"></div>
     <div className="bg-white w-full h-3"></div>
     <div className="bg-white w-full h-3"></div>
    </div>
   </div>
  </nav>
 );
};

const ListNavLinks = ({ Links }: { Links: Links }) => {
 return Links.map((title, index) => (
  <li
   key={index}
   className="flex group text-white text-md gap-x-3 hover:cursor-pointer hover:text-lightblue"
  >
   {title}
   {
    <Image
     src={arrowDown}
     alt="Arrow Down"
     className="w-3 group-hover:-rotate-180 transition-transform duration-200"
    />
   }
  </li>
 ));
};
export default Navbar;
