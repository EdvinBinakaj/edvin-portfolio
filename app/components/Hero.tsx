export function HeroSection() {
  return (
    <div className="border-b pb-4 border-neutral-900 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Edvin Binakaj
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Junior Frontend Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              I am a passionate Frontend developer with a knack for crafting
              robust and scalable web applications. With 2 years of hands-on
              experience, I have honed my skills in front-end technologies like
              React and RemixJs. My goal is to leverage my expertise to create
              innovative solutions that drive business growth and deliver
              exceptional user experiences.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src="/public/kevinRushProfile.png"
              alt="Photo of Edvin Binakaj"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
