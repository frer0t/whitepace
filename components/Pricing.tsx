import vectorline from '#/assets/vector.png';
import PricingBenefits from './PricingBenefits';
import pricingIcon from '/assets/pricing-icon.svg';
import Image from 'next/image';
const Pricing = () => {
 const PricingBenefitsData = [
  'Sync unlimited devices',
  '10 GB monthly uploads',
  '200 MB max. note size',
  'Customize Home dashboard and access extra widgets',
  'Connect primary Google Calendar account',
  'Add due dates, reminders, and notifications to your tasks',
 ];

 return (
  <section className="flex flex-col items-center">
   <div className="relative w-fit h-fit ">
    <h1 className="text-[2.25rem]  md:text-[3.38rem] lg:text-[4rem] xl:text-[4.63rem] leading-10 md:leading-[4rem] font-bold">
     Choose Your Plan
    </h1>
    <Image
     src={vectorline}
     alt="vector line"
     className="absolute -z-10 top-0 sm:top-4 left-[10%] md:left-[50%] xl:h-[2.8rem]"
    />
   </div>
   <p className="text-[1.13rem] text-center px-4 ">
    Whether you want to get organized, keep your personal life on track, or
    boost workplace productivity, Evernote has the right plan for you.
   </p>
   <div className="pricing-container bg-gray-700 w-full h-screen overflow-x-hidden">
    <div className="slider-wrapper">
     <div
      id="box-1"
      className="flex flex-col items-start gap-y-3 bg-white rounded-lg border border-lightyellow py-[2.5rem] px-[2.6rem] max-w-[25rem]"
     >
      <div className="flex flex-col gap-y-3">
       <p className="font-semibold text-lg">Free</p>
       <p className="font-bold text-2xl">$0</p>
       <p className="font-medium text-md">
        Capture ideas and find them quickly
       </p>
      </div>
      <div className="flex flex-col w-fit">
       {PricingBenefitsData.map((benefit, index) => (
        <PricingBenefits key={index} benefit={benefit} />
       ))}
      </div>
      <button>Get Started</button>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Pricing;
