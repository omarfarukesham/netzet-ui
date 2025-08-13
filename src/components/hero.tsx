import Image from "next/image";

const Hero = () => {
  return (
      <div className="hidden md:flex justify-between items-center mx-auto" style={{ maxWidth: '1440px', padding: '0 211px',  }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 h-[516px] w-[511px]">
            <h1 className="text-4xl font-bold text-white">
              Want to Turn Social Media Into a{' '}
              <span className="text-white">
                Profitable Career?
              </span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-cyan-400 font-semibold">
                Discover your way to success
              </p>
              <p className="text-xl md:text-2xl text-cyan-400 font-semibold">
                with Fametonic:
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-yellow-400 text-xl mt-1">✦</div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Start growing your influence right away</span>—no waiting required!
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-yellow-400 text-xl mt-1">✦</div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Create viral TikToks and Instagram Reels</span> step by step with easy-to-follow lessons
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-yellow-400 text-xl mt-1">✦</div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Use a Personal AI Worker</span> to boost your content
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-yellow-400 text-xl mt-1">✦</div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Learn from expert-led courses</span> designed for aspiring influencers
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                GET STARTED ›
              </button>
              <p className="text-gray-400 text-sm mt-3">
                1-minute quiz for personalized insights
              </p>
            </div>

            {/* Footer Text */}
            <div className="pt-8 text-xs text-gray-500 space-y-1">
              <p>By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
              <p>Fametonic 2025 ©All Rights Reserved</p>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-80 h-[500px] bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/heroImage.png"
                alt="Phone Mockup"
                width={660}
                height={678}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Hero;