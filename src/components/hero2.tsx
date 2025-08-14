import Image from 'next/image'
import React from 'react'

const Hero2 = () => {
  return (
    <div className="bg-black max-w-7xl mx-auto min-h-screen">
      
      {/* ================= Mobile Layout ================= */}
      <div className="flex flex-col lg:hidden">
        
        {/* --- Image Section (Mobile) --- */}
        <div className="w-full">
          <div className="w-full h-[400px]">
            <Image
              src="/heroImage.png"
              alt="Social media success on mobile device"
              width={679}
              height={666}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
          </div>
        </div>

        {/* --- Content Section (Mobile) --- */}
        <div className="p-4 sm:p-6 bg-black">
          
          {/* Heading */}
          <h1 className="text-white text-2xl sm:text-3xl font-extrabold leading-tight mb-4 font-[Urbanist]">
            Want to Turn Social Media Into <span className="block">a Profitable Career?</span>
          </h1>

          {/* Subheading with custom text shadow */}
          <h2
            className="text-2xl sm:text-2xl font-extrabold leading-tight mb-6 font-[Urbanist]"
            style={{
              color: "#10CBE0",
              textShadow: "2px 2px 0px #FC004E, 4px 4px 0px rgba(252, 0, 78, 0.3)",
            }}
          >
            Discover your way to success
            <br />
            with Fametonic:
          </h2>

          {/* Feature List (Now using starIcon instead of span) */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 ">
            {[
              "Start growing your influence right away—no waiting required!",
              "Create viral TikToks and Reels step by step with easy-to-follow lessons",
              "Use a Personal AI Worker to boost your content",
              "Learn from expert-led courses designed for aspiring influencers"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Image
                  src="/starIcon.png"
                  alt="Star Icon"
                  width={22}
                  height={22}
                  className="flex-shrink-0 inline-block align-middle"
                />
                <p className="text-white text-[16px] leading-relaxed font-[Figtree]">{text}</p>
              </div>
            ))}
          </div>

        {/* Footer */}
          {/* Call to Action button will be down and footer will be up of button */}
        
         <div className="mt-6 py-4 mx-auto flex flex-col items-center w-full">
            <div className="w-full flex flex-col items-center text-center font-[Figtree]">
                <p className="text-[#ABABAB] text-[12px] leading-tight font-medium">
                By clicking "Get Started", you agree with{" "}
                <span className="hover:text-gray-300">Terms and Conditions</span>,{" "}
                <span className="hover:text-gray-300">Privacy Policy</span>,{" "}
                <span className="hover:text-gray-300">Subscription Terms</span>
                </p>
                <p className="text-[#ABABAB] font-medium text-[12px] my-3">
                Fametonic 2025 ©All Rights Reserved.
                </p>
            </div>
          </div>

          <div className="space-y-3">
            <button
              className="w-full bg-[#FC004E] text-white font-bold  font-[Urbanist] py-3 sm:py-4 text-[20px] rounded-full transition-colors duration-200 relative"
              style={{
                boxShadow: "6px 6px 15px rgba(16, 203, 224, 0.8), 0px 0px 0px transparent"
              }}
            >
              GET STARTED
              <Image
                src="/Vector.svg"
                alt="Arrow Icon"
                width={11}
                height={6}
                className="inline-block ml-2 items-center"
              />
            </button>
            <p className="text-white text-[12px] font-[Figtree] text-center mt-2">
              1-minute quiz for personalized insights
            </p>
          </div>

         

        </div>
      </div>

      {/* ================= Desktop Layout ================= */}
      <div className="hidden lg:block relative h-screen bg-transparent">
        
        {/* --- Image Panel (Right Side) --- */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[60%] h-[100%]">
          <div className="w-full h-full rounded-lg p-6">
            <Image
              src="/heroImage.png"
              alt="Social media success on mobile device"
              width={679}
              height={666}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
          </div>
        </div>

        {/* --- Content Panel (Left Side) --- */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[70%] h-[85%] rounded-r-lg shadow-2xl z-10">
          <div className="p-8 xl:p-12 h-full flex flex-col justify-center">
            
            {/* Heading */}
            <h1 className="text-white text-4xl xl:text-4xl font-bold leading-tight mb-4 font-[Urbanist]">
              Want to Turn Social Media Into a <span className="block"> Profitable Career?</span>
            </h1>

            {/* Subheading with text shadow */}
            <h2
              className="text-4xl xl:text-4xl font-bold leading-tight mb-8 font-[Urbanist]"
              style={{
                color: "#10CBE0",
                textShadow: "2px 2px 0px #FC004E, 4px 4px 0px rgba(252, 0, 78, 0.3)",
              }}
            >
              Discover your way to success
              <br />
              with Fametonic:
            </h2>

            {/* Feature List */}
            <div className="space-y-4 mb-8 flex-1">
              {[
                "Start growing your influence right away—no waiting required!",
                "Create viral TikToks and Reels step by step with easy-to-follow lessons",
                "Use a Personal AI Worker to boost your content",
                "Learn from expert-led courses designed for aspiring influencers"
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Image
                    src="/starIcon.png"
                    alt="Star Icon"
                    width={22}
                    height={22}
                    className="flex-shrink-0 inline-block align-middle"
                  />
                  <p className="text-white text-[16px] font-semibold font-[Figtree] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="space-y-4 max-w-md">
              <button
                className="w-full bg-[#FC004E] font-[Figtree] text-white font-bold py-3 sm:py-4 text-[20px] rounded-full transition-colors duration-200 relative"
                style={{
                  boxShadow: "6px 6px 15px rgba(16, 203, 224, 0.8), 0px 0px 0px transparent"
                }}
              >
                GET STARTED 
                <Image
                  src="/Vector.svg"
                  alt="Arrow Icon"
                  width={11}
                  height={6}
                  className="inline-block ml-2 items-center"
                />
              </button>
              <p className="text-white text-[12px] text-center mt-2 font-[Figtree]">
                1-minute quiz for personalized insights
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 max-w-md">
              <p className="text-[#ABABAB] text-[12px] leading-tight font-medium font-[Figtree]">
                By clicking "Get Started", you agree with{" "}
                <span className="hover:text-gray-300">Terms and Conditions</span>,{" "}
                <span className="hover:text-gray-300">Privacy Policy</span>,{" "}
                <span className="hover:text-gray-300">Subscription Terms</span>
              </p>
              <p className="text-[#ABABAB] font-medium text-[12px] mt-4 font-[Figtree]">
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2
