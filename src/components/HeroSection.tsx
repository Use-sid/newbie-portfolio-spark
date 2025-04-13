
import { ArrowDownCircle } from 'lucide-react';
import { Button } from "../components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-8 overflow-hidden">
      {/* Banner with images */}
      <div className="w-full h-48 md:h-64 lg:h-80 mb-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
        <div className="flex gap-2 md:gap-4 h-full justify-center">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
            alt="Developer working" 
            className="object-cover h-full w-1/3 rounded-md"
          />
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
            alt="Developer coding" 
            className="object-cover h-full w-1/3 rounded-md"
          />
          <img 
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
            alt="Developer with laptop" 
            className="object-cover h-full w-1/3 rounded-md"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <p className="text-teal-600 font-semibold mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              John Doe
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Frontend Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              A passionate fresher developer with a strong foundation in modern web technologies.
              I create responsive and user-friendly web experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-teal-600 hover:bg-teal-700">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                <a href="/resume.pdf" download>Download CV</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="profile-container">
              <div className="profile-bg"></div>
              <img 
                src="/lovable-uploads/1bcc17d2-7caa-4858-95d3-dd330c0be00b.png" 
                alt="Profile"
                className="profile-image w-64 h-64 md:w-80 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-teal-600 hover:text-teal-700 transition-colors">
            <ArrowDownCircle size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
