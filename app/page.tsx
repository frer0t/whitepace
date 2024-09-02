import logo from './assets/logo.svg';
import Image from 'next/image';
export default function Home() {
 return (
  <main className="flex items-center justify-center h-screen w-screen">
   <div className="flex flex-col items-center justify-center px-2">
    <Image src={logo} alt="whitepace" priority={true} />
    <h1 className="text-[#4F9CF9] font-bold ">Comming soon...</h1>
   </div>
  </main>
 );
}
