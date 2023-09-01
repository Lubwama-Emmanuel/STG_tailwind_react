import Hero from "../Components/Hero";
import HomeServices from "../Components/HomeServices";
import SlideShow from "../Components/SlideShow";
import Vision from "../Components/Vision";
import WhySimba from "../Components/WhySimba";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <Vision />
      <WhySimba />
      <HomeServices />
      <SlideShow />
    </div>
  );
}
