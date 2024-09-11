import Image from 'next/image';
import Circular from '../assets/circular.svg';
import vectorline from '../assets/vector.png';
import rightArrow from '../assets/right arrow icon.svg';
import image2 from '../assets/2nd img.png';
const About = () => {
 return (
  <section className="relative px-[16px] py-[80px] md:px-[20px] md:py-[100px] lg:px-[32px] lg:py-[140px] xl:py-[100px] 2xl:px-[220px] 2xl:py-[140px] flex flex-col lg:flex-row gap-y-3 justify-center items-center">
   <div className="lg:max-w-[528px] flex flex-col items-center lg:items-start  gap-y-6">
    <div className="relative h-fit w-fit lg:max-w-[460px]">
     <h1 className="leading-[40px] text-[36px] text-center lg:text-start md:text-[54px] lg:text-[64px] xl:text-[72px] md:leading-[70px] font-bold">
      Project Management
     </h1>
     <Image
      src={vectorline}
      alt="Vector line"
      className="absolute -bottom-5 md:-bottom-4 md:w-[60%] right-0 lg:right-22 -z-20 "
     />
    </div>
    <p className="text-[16px] sm:text-[18px] text-center lg:text-start">
     Images, videos, PDFs and audio files are supported. Create math expressions
     and diagrams directly from the app. Take photos with the mobile app and
     save them to a note.
    </p>
    <button className="flex items-center justify-center text-[18px] text-white bg-blue rounded-lg px-[40px] py-[20px]">
     Get Started
     <Image src={rightArrow} alt="right arrow icon" className="max-w-[34px]" />
    </button>
   </div>
   <Image
    src={image2}
    alt="image 2"
    className="w-[286px] md:w-[561px] lg:w-[527px] xl:w-[719px] 2xl:w-[748px]"
   />
   <Image
    src={Circular}
    alt="Circular"
    className="absolute left-0 top-20 -z-40 max-w-[110px]  sm:max-w-[190px] md:max-w-[280px] lg:max-w-[300px] xl:max-w-[370px] 2xl:max-w-[440px]"
   />
  </section>
 );
};

export default About;
