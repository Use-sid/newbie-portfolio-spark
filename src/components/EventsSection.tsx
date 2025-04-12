
import React, { useState } from 'react';
import { Calendar, MapPin, Users, ChevronRight, Gallery } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';

// Sample events data with multiple images per event
const events = [
  {
    id: 1,
    title: "Web Development Conference 2023",
    date: "March 15-17, 2023",
    location: "San Francisco, CA",
    description: "Attended sessions on React, TypeScript, and modern web development practices.",
    attendees: "500+",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    galleryImages: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      "https://images.unsplash.com/photo-1623479322729-28b25c16b011",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e4"
    ]
  },
  {
    id: 2,
    title: "JavaScript Meetup",
    date: "January 25, 2023",
    location: "Online",
    description: "Monthly meetup discussing latest trends in JavaScript ecosystem.",
    attendees: "200+",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    galleryImages: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
    ]
  },
  {
    id: 3,
    title: "Hackathon 2023",
    date: "June 10-12, 2023",
    location: "New York, NY",
    description: "Participated in a 48-hour hackathon building innovative web applications.",
    attendees: "350",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    galleryImages: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83"
    ]
  }
];

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setDialogOpen(true);
  };

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
            <Card 
              key={event.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" 
              onClick={() => handleEventClick(event)}
            >
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
                  
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700 mt-2 line-clamp-2">{event.description}</p>
                    <div className="flex items-center text-primary">
                      <span className="text-sm font-medium">View Details</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Event Detail Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedEvent.title}</DialogTitle>
                <DialogDescription className="flex items-center gap-2 mt-2">
                  <Calendar className="h-4 w-4" /> {selectedEvent.date} | 
                  <MapPin className="h-4 w-4 ml-2" /> {selectedEvent.location} |
                  <Users className="h-4 w-4 ml-2" /> {selectedEvent.attendees} attendees
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <p className="text-gray-700 mb-6">{selectedEvent.description}</p>
                
                <div className="mb-2 flex items-center gap-2">
                  <Gallery className="h-5 w-5" />
                  <h3 className="text-lg font-medium">Event Gallery</h3>
                </div>
                
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedEvent.galleryImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <div className="overflow-hidden rounded-lg">
                            <img 
                              src={image} 
                              alt={`${selectedEvent.title} - Photo ${index + 1}`}
                              className="w-full h-[300px] object-cover object-center"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EventsSection;
