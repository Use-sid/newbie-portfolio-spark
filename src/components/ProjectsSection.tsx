
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce website with cart functionality built with React and Redux.",
      image: "https://images.unsplash.com/photo-1576616832247-681a77117dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      tags: ["React", "Redux", "Tailwind CSS"],
      liveLink: "https://example.com",
      repoLink: "https://github.com"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      tags: ["React", "Tailwind CSS", "Vite"],
      liveLink: "https://example.com",
      repoLink: "https://github.com"
    },
    {
      id: 3,
      title: "Weather App",
      description: "A weather application that shows current weather and forecast for any location.",
      image: "https://images.unsplash.com/photo-1561479234-d2e9608f6a60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      tags: ["React", "OpenWeather API", "CSS"],
      liveLink: "https://example.com",
      repoLink: "https://github.com"
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto">My Projects</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each project is a unique piece of development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-teal-100 text-teal-700 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex gap-4">
                {project.liveLink && (
                  <Button 
                    variant="default" 
                    className="bg-teal-600 hover:bg-teal-700 flex items-center gap-2"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                )}
                
                {project.repoLink && (
                  <Button 
                    variant="outline" 
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 flex items-center gap-2"
                    onClick={() => window.open(project.repoLink, '_blank')}
                  >
                    <Github size={16} />
                    Code
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-teal-600 text-teal-600 hover:bg-teal-50"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            See more on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
