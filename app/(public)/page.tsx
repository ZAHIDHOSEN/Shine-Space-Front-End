import Banner from "@/components/module/home/Banner";
import Contact from "@/components/module/home/Contact";
import Faq from "@/components/module/home/Faq";
import Review from "@/components/module/home/Review";




export default function Home() {
  return (
     <div>
       <Banner></Banner>
       <Review></Review>
       <Faq></Faq>
       <Contact></Contact>
      
     </div>
  );
}
