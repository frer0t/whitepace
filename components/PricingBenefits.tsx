import pricingIcon from '#/assets/pricing-icon.svg';
import Image from 'next/image';
const PricingBenefits = ({ benefit }: { benefit: string }) => {
 return (
  <span className="flex items-center gap-x-2">
   <Image src={pricingIcon} alt="Pricing Icon" />
   {benefit}
  </span>
 );
};

export default PricingBenefits;
