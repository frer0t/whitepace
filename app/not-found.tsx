import Link from 'next/link';

const notFound = () => {
 return (
  <div className="bg-darkblue h-screen flex flex-col gap-y-4 items-center justify-center ">
   <div className="flex text-lg">
    <p className="border-r-2 border-blue text-white pr-3">404</p>
    <p className="text-white pl-3">This page could not be found.</p>
   </div>
   <Link
    href={'/'}
    className="text-[12px] sm:text-[18px] text-white bg-blue rounded-lg px-[30px] py-[15px] lg:px-[20px] lg:py-[10px] hover:bg-lightblue hover:text-lightyellow transition-colors duration-300"
   >
    Go Back
   </Link>
  </div>
 );
};

export default notFound;
