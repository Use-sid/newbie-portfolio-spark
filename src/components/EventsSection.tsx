
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

// Sample events data - you can customize these with your own events
const events = [
  {
    id: 1,
    title: "Web Development Conference 2023",
    date: "March 15-17, 2023",
    location: "San Francisco, CA",
    description: "Attended sessions on React, TypeScript, and modern web development practices.",
    attendees: "500+",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 2,
    title: "JavaScript Meetup",
    date: "January 25, 2023",
    location: "Online",
    description: "Monthly meetup discussing latest trends in JavaScript ecosystem.",
    attendees: "200+",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    id: 3,
    title: "Hackathon 2023",
    date: "June 10-12, 2023",
    location: "New York, NY",
    description: "Participated in a 48-hour hackathon building innovative web applications.",
    attendees: "350",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

const EventsSection = () => {
  return (
    <section id="events" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Events Attended</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional events and conferences I've participated in to stay updated with the latest technologies and network with fellow developers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {event.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} attendees</span>
                  </div>
                  
                  <p className="text-gray-700 mt-2">{event.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
