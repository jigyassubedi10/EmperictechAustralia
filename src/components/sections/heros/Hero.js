import ButtonSeondary from "@/components/shared/buttons/ButtonSeondary";
import FunFact from "@/components/shared/fun-fact/FunFact";
import React from "react";

const Hero = () => {
  return (
    <section className="hero-section relative pt-130px lg:pt-40 xl:pt-200px pb-10 md:pb-30px lg:pb-50px after:absolute after:top-0 after:right-0 after:w-322px after:h-308px after:blur-[150px] after:rounded-50% after:bg-gradient-circle after:-z-1 after:-mt-5% after:-mr-5% overflow-hidden">
      {/* <!-- intro tex --> */}
      <div className="intro_text">
        <svg viewBox="0 0 1320 300" className="overflow-hidden">
          <text x="50%" y="50%" textAnchor="middle" className="animate-stroke">
           EMPERIC
          </text>
        </svg>
      </div>
      <div className="container justify-center items-center h-[400px] text-center">
        <div className="hidded md:grid md:items-center gap-30px">
          <div>
            {/* <h4 className="text-seondary-color dark:text-body-color text-size-22 md:text-size-25 lg:text-4xl lg:leading-1.5 font-bold mb-1.5 xl:mb-10px">
              I am Jigyas
            </h4> */}
            <h1 className="text-size-35 md:text-size-38 lg:text-size-50 xl:text-6xl 2xl:text-size-65 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mt-24 mb-15px">
            Innovate. Integrate. Accelerate.
            </h1>
            {/* <div className="flex md:hidden justify-center items-center my-30px"> */}
              {/* <Image
                src="/img/hero/me.png"
                width={437}
                height={475}
                alt="banner image"
                className="rounded-38px border-2 border-seondary-color hover:border-primary-color rotate-[4.29deg] hover:rotate-0 transition-all duration-300 max-w-[80%]"
              /> */}
            {/* </div> */}
            <p className="text-xl leading-1.5 text-primary-color-light dark:text-body-color">
            Enhance your business efficiency, optimize operations, and drive growth with our cutting-edge IT solutions, tailored to meet your unique needs
            </p>
            {/* <!-- action and social --> */}
            <div className="items-center gap-30px lg:gap-25px mt-5 flex-wrap lg:flex-nowrap md:mt-30px lg:mt-50px">
            <div className="flex flex-nowrap justify-center items-center space-x-2">
  <ButtonSeondary url="#services" className="px-2 text-sm w-auto">
    Learn More
  </ButtonSeondary>
  <ButtonSeondary url="/get-quote" className="px-2 text-sm w-auto">
    Get a Quote
  </ButtonSeondary>
</div>



              
              {/* socials */}
              {/* <Socials /> */}
            </div>
          </div>
          {/* <div className="hidden md:flex md:justify-center md:items-center relative after:absolute after:bottom-0 after:left-0 after:w-220px after:h-220px after:blur-[150px] after:rounded-50% after:bg-gradient-circle after:-z-1 after:-mt-5% after:-mr-5%">
            <Image
              src="/img/hero/me.png"
              width={437}
              height={475}
              alt="banner image"
              className="rounded-38px border-2 border-seondary-color hover:border-primary-color rotate-[4.29deg] hover:rotate-0 transition-all duration-300"
            />
          </div> */}
        </div>
      </div>
      
      {/* <!-- fanfact --> */}
      {/* <FunFact /> */}
      
    </section>
  );
};

export default Hero;
