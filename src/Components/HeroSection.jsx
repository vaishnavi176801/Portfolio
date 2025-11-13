
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="Hero relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="HeroHeading opacity-0 animate-fade-in">
           <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Vaishnavi
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Bharti
            </span>
          </h1>

          <p className="text-muted-foreground opacity-0 animate-fade-in-delay-3 ">
            I am a Full-Stack Developer.Currently, I am focused
            on developing responsive web
            applications and pursing my degree in CS at dalhousie University.
          </p>
        </div>
        </div>
        <div className="ProjectButtonContainer mt-8 opacity-0 animate-fade-in-">
            <a
                href="#projects" className="cosmic-button">View my work</a>
        </div>
        </section>

  );
};
export default HeroSection;