import AboutSocials from "@/components/about/AboutSocials";
import Headshot from "@/components/about/Headshot";
import Intro from "@/components/about/Intro";
import React from "react";

const AboutPage = () => {
  return (
    <div className="sm:px-20 mt-16 sm:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <Headshot />
            <Intro />
            <div className="lg:pl-16">
              <AboutSocials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
