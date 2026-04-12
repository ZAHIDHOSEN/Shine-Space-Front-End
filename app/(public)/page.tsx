import Banner from "@/components/module/home/Banner";
import Contact from "@/components/module/home/Contact";
import Faq from "@/components/module/home/Faq";
import Features from "@/components/module/home/Features";

import Review from "@/components/module/home/Review";
import Stats from "@/components/module/home/Stats";




export default function Home() {
  return (
     <div>
       <Banner></Banner>
       <Features></Features>
       <Stats></Stats>
       <Review></Review>
       <Faq></Faq>
       <Contact></Contact>
      
     </div>
  );
}
