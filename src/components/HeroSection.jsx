import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-pink-300 opacity-0 animate-fade-in-delay-1"> Saumya</span>
            <span  className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2" > Singh</span>
          </h1>

          <div className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 space-y-4">
            <p>
              A girl who codes with{" "}
              <strong >curiosity</strong>, designs with{" "}
              <strong >heart</strong>, and builds with{" "}
              <strong >purpose</strong>.
              <br />
              I blend <strong >logic, creativity</strong>, and{" "}
              <span className=" dark:text-pink-300 ">✨just the right amount of pink✨</span> to bring ideas to life —
              from sleek UI to scalable backend systems.
            </p>

            <p>
              With expertise in the{" "}
              <strong>MERN stack</strong> and a love for{" "}
              <strong >problem-solving in C++</strong>, I’ve tackled over{" "}
              <strong >500+ LeetCode problems</strong> and enjoy turning concepts into
              clean, efficient code.
            </p>

            <p>
              The journey has just begun — learning every day, building with love, and I can't wait to see where code takes me. 🌱
            </p>

            <p className="mt-4 italic text-sm text-pink-600 dark:text-pink-300 text-center">
              “Building with logic, designing with love.” 💗
            </p>
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-pink-300" />
      </div>
    </section>
  );
};

export default HeroSection;
