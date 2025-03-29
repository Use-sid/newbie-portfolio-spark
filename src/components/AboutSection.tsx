
import React from 'react';
import { Card, CardContent } from "../components/ui/card";
import { BookOpen, Briefcase, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get to know me!</h3>
            <p className="text-gray-600 mb-4">
              I'm a <span className="text-teal-600 font-medium">Frontend Web Developer</span> building responsive 
              and user-friendly websites and web applications that lead to the success of the overall product.
            </p>
            <p className="text-gray-600 mb-4">
              I also like sharing content related to what I've learned over the years in web development 
              so it can help other people in the dev community.
            </p>
            <p className="text-gray-600 mb-6">
              I'm open to job opportunities where I can contribute, learn, and grow. If you have a good 
              opportunity that matches my skills and experience, don't hesitate to contact me.
            </p>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors inline-block"
            >
              Contact Me
            </a>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">My Background</h3>
            <div className="space-y-6">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Education</h4>
                    <p className="text-gray-600">B.Tech in Computer Science</p>
                    <p className="text-gray-500 text-sm">University Name, 2019-2023</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Experience</h4>
                    <p className="text-gray-600">Web Development Intern</p>
                    <p className="text-gray-500 text-sm">Company Name, May 2023 - Aug 2023</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Certifications</h4>
                    <p className="text-gray-600">Full Stack Web Development</p>
                    <p className="text-gray-500 text-sm">Udemy, 2022</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
