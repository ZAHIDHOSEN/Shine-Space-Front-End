import Banner from "@/components/module/home/Banner";
import Cities from "@/components/module/home/City";
import Contact from "@/components/module/home/Contact";
import Faq from "@/components/module/home/Faq";
import FeaturedProperties from "@/components/module/home/FeaturedProperties";
import Features from "@/components/module/home/Features";
import HowItWorks from "@/components/module/home/HowItWorks";

import Review from "@/components/module/home/Review";
import Stats from "@/components/module/home/Stats";




export default function Home() {
  return (
     <div>
       <Banner></Banner>
       <Features></Features>
       <FeaturedProperties></FeaturedProperties>
       <HowItWorks></HowItWorks>
       <Stats></Stats>
       <Cities></Cities>
       <Review></Review>
       <Faq></Faq>
       <Contact></Contact>
     </div>
  );
}
