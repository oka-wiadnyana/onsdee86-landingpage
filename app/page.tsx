import Image from "next/image";
import Nav from "@/components/nav/nav";
import Header from "@/components/header";
import Introduction from "@/components/introduction";
import Feature from "@/components/features/feature";
import DetailFirst from "@/components/detailFirst";
import DetailSecond from "@/components/detailSecond";
import Lightbox from "@/components/lightbox";
import DetailThird from "@/components/detailThird";
import Statistics from "@/components/statistics/statistics";
import Testimonial from "@/components/testimonial/testimonial";
import Pricing from "@/components/pricing/pricing";
import Conclusion from "@/components/conclusion";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      {/* <style jsx global>{`
        html {
          font-family: url("https://fonts.googleapis.com/css2?family=Inter&display=optional");
        }
      `}</style> */}
      <Nav />
      <Header />
      <Introduction />
      <Feature />
      <DetailFirst />
      <DetailSecond />
      <Lightbox />
      <DetailThird />
      <Statistics />
      <Testimonial />
      <Pricing />
      <Conclusion />
      <Footer />
    </>
  );
}
