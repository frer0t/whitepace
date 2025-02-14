import image4 from '../assets/4th image.png';
import Image from 'next/image';
import vectorline from '../assets/vector.png';
import rightArrow from '../assets/right arrow icon.svg';
const Customise = () => {
 return (
  <section className="flex flex-col lg:flex-row items-center gap-x-3 gap-y-10 px-4 py-20 md:px-[2rem] md:py-[6.3rem] lg:py-[8.7rem] 2xl:px-[13.8rem]">
   <Image
    src={image4}
    alt="image 4"
    className="w-[18rem] md:w-[35rem] lg:w-[60.8rem] rounded-lg"
   />
   <div className="z-0 flex flex-col items-center lg:items-start gap-y-8 ">
    <div className="relative w-fit h-fit">
     <h1 className="text-[2.25rem] text-center lg:text-start md:text-[3.38rem] lg:text-[4rem] xl:text-[4.63rem] leading-10 md:leading-[4rem] font-bold t">
      Customise it to your needs
     </h1>
     <Image
      src={vectorline}
      alt="vector line"
      className="absolute -z-10 top-0 sm:top-4 left-[10%] md:left-[50%] xl:h-[2.8rem]"
     />
    </div>
    <p className="text-[1.13rem] text-center lg:text-start">
     Customise the app with plugins, custom themes and multiple text editors
     (Rich Text or Markdown). Or create your own scripts and plugins using the
     Extension API.
    </p>
    <button className="flex items-center justify-center text-[18px] text-white bg-blue rounded-lg px-[20px] py-[10px]">
     Let&apos;s go
     <Image src={rightArrow} alt="right arrow icon" className="max-w-[34px]" />
    </button>
   </div>
  </section>
 );
};

export default Customise;
