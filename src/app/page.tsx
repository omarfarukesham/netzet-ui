// import MidNavbar from "@/components/MidNavbar";
import Hero from "@/components/hero";
import MidNavbar from "@/components/MidNavbar";
import TopNavbar from "@/components/TopNavbar";
import Image from "next/image";

export default function Home() {
  return (
   <div className="min-h-screen bg-black  mx-auto">
      <TopNavbar />
      <MidNavbar />
      <Hero />
     

   </div>
  );
}
