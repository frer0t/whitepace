import worktogetherimage from '../assets/worktogetherimage.svg';
import vectorline from '../assets/vector.png';
import Image from 'next/image';

const Work = () => {
 return (
  <section className="px-[16px] sm:px-[20px] md:px-[32px] 2xl:px-[220px] pb-[80px] md:pb-[100px] lg:pb-[140px] flex flex-col-reverse gap-8 items-center lg:flex-row">
   <Image
    src={worktogetherimage}
    alt="worktogether image"
    className="w-[17.5rem] h-[16.3rem] md:w-[454px] md:h-[422px] lg:w-[528px] lg:h-[490px] xl:w-[583px] xl:h-[542px] 2xl:w-[710px] 2xl:h-[661px]"
   />
   <div className="flex flex-col items-center lg:items-start">
    <div className="relative w-fit h-fit">
     <h1 className="text-[2.25rem] text-center lg:text-start md:text-[3.38rem] lg:text-[4rem] xl:text-[4.63rem] md:leading-[4rem] font-bold">
      Work together
     </h1>
     <Image
      src={vectorline}
      alt="vector line"
      className="absolute -z-40 right-0 bottom-0 h-[2.5rem]"
     />
    </div>
    <p className="text-center lg:text-left pt-4">
     With whitepace, share your notes with your colleagues and collaborate on
     them. You can also publish a note to the internet and share the URL with
     others.
    </p>
   </div>
  </section>
 );
};

export default Work;
