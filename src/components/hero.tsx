import Image from "next/image"

export function Hero() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Responsive container: image on top, content below on mobile */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 pb-2">
        {/* Left side - Content panel */}
        <div className="w-full bg-black rounded-lg z-10 relative lg:w-[515px] lg:h-[510px] overflow-hidden">
          <div className="p-4 sm:p-6 h-full flex flex-col">
            <h1 className="text-white text-xl sm:text-2xl font-bold leading-tight mb-4">
              Want to Turn Social Media Into a <span className="block">Profitable Career?</span>
            </h1>
            <h2 className="text-cyan-400 text-lg sm:text-xl font-semibold mb-6">
              Discover your way to success <span className="block">with Fametonic:</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 text-lg flex-shrink-0">✨</span>
                <p className="text-white text-sm leading-relaxed">
                  Start growing your influence right away—no waiting required!
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 text-lg flex-shrink-0">✨</span>
                <p className="text-white text-sm leading-relaxed">
                  Create viral TikToks and Reels step by step with easy-to-follow lessons
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 text-lg flex-shrink-0">✨</span>
                <p className="text-white text-sm leading-relaxed">Use a Personal AI Worker to boost your content</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 text-lg flex-shrink-0">✨</span>
                <p className="text-white text-sm leading-relaxed">
                  Learn from expert-led courses designed for aspiring influencers
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <button
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 sm:py-4 text-base sm:text-lg rounded-full transition-colors duration-200"
              >
                GET STARTED ▷
              </button>
              <p className="text-white text-xs text-center">1-minute quiz for personalized insights</p>
            </div>
            <div className="my-4  border-t border-gray-700">
              <p className="text-gray-400 text-xs leading-tight">
                By clicking "Get Started", you agree with{" "}
                <span className="underline cursor-pointer hover:text-gray-300">Terms and Conditions</span>,{" "}
                <span className="underline cursor-pointer hover:text-gray-300">Privacy Policy</span>,{" "}
                <span className="underline cursor-pointer hover:text-gray-300">Subscription Terms</span>
              </p>
              <p className="text-gray-400 text-xs mt-2">Fametonic 2025 ©All Rights Reserved.</p>
            </div>
          </div>
        </div>
        {/* Right side - Image */}
        <div className="relative flex justify-center lg:justify-end md:justify-end bg-transparent">
          <div className="w-full lg:w-[679px] lg:h-[666px] ">
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
      </div>
    </div>
  )
}

export default Hero;
// filepath: c:\Users\USER\Desktop\netzet\src\components\hero.tsx