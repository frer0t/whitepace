import Image from 'next/image';
import vectorline from '../assets/vector.png';
import rightArrow from '../assets/right arrow icon.svg';
import image3 from '../assets/3rd img.png';
const UseExtension = () => {
 return (
  <section className="flex flex-col lg:flex-row items-center gap-x-3 gap-y-10 bg-darkblue text-white px-4 py-20 md:px-[2rem] md:py-[6.3rem] lg:py-[8.7rem] 2xl:px-[13.8rem]">
   <div className="z-0 flex flex-col items-center lg:items-start gap-y-8 ">
    <div className="relative w-fit h-fit">
     <h1 className="text-[2.25rem] text-center lg:text-start md:text-[3.38rem] lg:text-[4rem] xl:text-[4.63rem] leading-10 md:leading-[4rem] font-bold t">
      Use as Extension
     </h1>
     <Image
      src={vectorline}
      alt="vector line"
      className="absolute -z-10 right-0 bottom-0 h-[2.5rem]"
     />
    </div>
    <p className="text-[1.13rem] text-center lg:text-start">
     Use the web clipper extension, available on Chrome and Firefox, to save web
     pages or take screenshots as notes.
    </p>
    <button className="flex items-center justify-center text-[18px] text-white bg-blue rounded-lg px-[20px] py-[10px]">
     Let&apos;s go
     <Image src={rightArrow} alt="right arrow icon" className="max-w-[34px]" />
    </button>
   </div>
   <Image
    src={image3}
    alt="Image 2"
    className="w-[18rem] md:w-[35rem] lg:w-[28.8rem] xl:w-[43rem]"
   />
  </section>
 );
};

export default UseExtension;
