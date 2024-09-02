import Image from 'next/image';
import img1 from '../assets/1st img.png';
import rightArrow from '../assets/right arrow icon.svg';

const Hero = () => {
 return (
  <section
   id="overview"
   className=" bg-darkblue flex flex-col items-center justify-center gap-[50px] px-[16px] py-[100px] md:pt-[140px] md:pb-[100px] md:px-[20px] lg:h-screen lg:flex-row lg:px-[32px] lg:py-[140px] xl:px-[32px] xl:py-[100px] 2xl:px-[220px] 2xl:py-[140px]"
  >
   <div className="flex flex-col items-center lg:items-start gap-y-8  ">
    <h1 className="text-center lg:text-start text-[36px] leading-[40px] md:text-[54px] md:leading-[60px] lg:text-[70px] lg:leading-[80px] font-bold text-white">
     Get More Done with whitepace
    </h1>
    <p className=" text-center lg:text-start text-[15px] sm:text-[18px] font-normal text-white">
     Project management software that enables your teams to collaborate, plan,
     analyze and manage everyday tasks
    </p>
    <button className="flex items-center justify-center text-[12px] sm:text-[18px] text-white bg-blue rounded-lg px-[30px] py-[15px] lg:px-[20px] lg:py-[10px]">
     Try Whitepace free
     <Image src={rightArrow} alt="right arrow icon" className="max-w-[34px]" />
    </button>
   </div>
   <Image
    src={img1}
    alt="toon image"
    priority={true}
    className="md:min-w-[550px] lg:min-w-[600px] xl:min-w-[800px] 2xl:min-w-[1000px] rounded-lg"
   />
  </section>
 );
};

export default Hero;
