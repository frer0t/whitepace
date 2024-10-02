import About from '#/components/About';
import Customise from '#/components/Customise';
import Hero from '#/components/Hero';
import Pricing from '#/components/Pricing';
import UseExtension from '#/components/UseExtension';
import Work from '#/components/Work';
export default function Home() {
 return (
  <main>
   <Hero />
   <About />
   <Work />
   <UseExtension />
   <Customise />
   <Pricing />
  </main>
 );
}
