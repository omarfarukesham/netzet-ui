// import MidNavbar from "@/components/MidNavbar";
import Hero from "@/components/hero";
import Hero2 from "@/components/hero2";
import MidNavbar from "@/components/MidNavbar";
import TopNavbar from "@/components/TopNavbar";


export default function Home() {
  return (
   <div className="min-h-screen bg-black mx-auto">
      <TopNavbar />
      <MidNavbar />
      {/* <Hero /> */}
      <Hero2 />
   </div>
  );
}
