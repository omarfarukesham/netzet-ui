// import Hero from "@/components/hero";
import Hero from "@/components/hero";
import MidNavbar from "@/components/MidNavbar";
import TopNavbar from "@/components/TopNavbar";


export default function Home() {
  return (
   <div className="min-h-screen bg-black mx-auto">
      <TopNavbar />
      <MidNavbar />
      <Hero />
   </div>
  );
}
