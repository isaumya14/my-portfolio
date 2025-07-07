import React from "react";
import { Briefcase, Code, User } from "lucide-react";
import profileImg from "../assets/profile.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
          About <span className="text-pink-300">Me</span>
        </h2>

        {/* Main Layout */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-20">
          {/* Image Section with glow and particles */}
          <div className="flex justify-center md:justify-start w-full md:w-4/12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
              <div className="relative">
                <img
                  src={profileImg}
                  alt="Saumya Singh"
                  className="w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-pink-500/60 shadow-2xl object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-pink-500 rounded-full animate-ping"></div>
                <div className="absolute -bottom-6 -left-6 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-300"></div>
                <div className="absolute top-1/4 -left-8 w-1 h-1 bg-blue-500 rounded-full animate-ping delay-700"></div>
                <div className="absolute bottom-1/4 -right-8 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Wider Text Section with cleaner heading */}
          <div className="w-full md:w-8/12 text-center md:text-left space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
              From Hello World to Who I Am
              <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"></span>
            </h3>

            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p className="italic">
                What started as a curious spark while exploring HTML pages as a
                teen soon grew into a full-blown passion for building digital
                experiences that matter.
              </p>
              <p>
                <strong>Hey there!</strong> I’m someone who finds magic in
                merging design with logic. Whether it’s crafting smooth
                interfaces or developing the backend systems that power them, I
                love working across the stack to bring meaningful ideas to life.
                I enjoy tackling challenges like authentication, clean
                architecture, and user experience — everything from flow to
                functionality.
              </p>
              <p>
                🎧 I work best with music in the background — code flows smoother
                with a good playlist. <br />
                ⚡ I’m a fast and curious learner, always excited to dive into
                new tools, concepts, and challenges. <br />
                🌸 I love adding the final polish — animations, gradients,
                emojis — all the little things that make something feel just
                right.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1xoelhhQqRnUCX9LV7oZtJER5hwEvuET1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-pink-900 text-pink-300 hover:bg-primary/10 transition"
              >
                View Resume
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1xoelhhQqRnUCX9LV7oZtJER5hwEvuET1"
                className="px-6 py-2 rounded-full border border-pink-900 text-pink-300 hover:bg-primary/10 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Code,
              title: "Full-Stack Engineering",
              description:
                "Skilled in both frontend and backend development, I build complete web solutions that are scalable and user-centric. ",
                color: "pink",
              glowColor: "pink-300",
            },
            {
              icon: User,
              title: " Fast Learner, Forever Curious",
              description:
                "Whether it's learning a new framework or debugging at 2AM, I'm quick to adapt and always eager to grow.",
              color: "pink",
              glowColor: "pink-300",
            },
            {
              icon: Briefcase,
              title: "Committed to Growth",
              description:
                "I embrace feedback, adapt to change, and continuously seek opportunities to improve — both in code and collaboration.",
              color: "pink",
              glowColor: "pink-300",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-${card.color}-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10 text-center">
                <div className="relative mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-${card.color}-300/20 to-${card.color}-600/20 border border-${card.color}-500/30 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <card.icon className={`h-8 w-8 text-${card.color}-500`} />
                  </div>
                  <div
                    className={`absolute -top-1 -right-1 w-2 h-2 bg-${card.color}-500 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`absolute -bottom-1 -left-1 w-1 h-1 bg-${card.color}-400 rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
                </div>

                <h4 className="font-bold text-xl mb-4 group-hover:text-pink-300 transition-colors duration-300">
                  {card.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {card.description}
                </p>
              </div>

              <div
                className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-${card.color}-500 to-${card.color}-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
