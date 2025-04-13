
import React from 'react';

// This is an example of how to import images in a React component
// For example, if you have images in the src/pictures/Events folder:
// import eventMainImage from '../pictures/Events/event1-main.jpg';

const ImageGuide = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">How to Use Local Images</h2>
      
      <div className="space-y-4">
        <p>
          To use images from your local machine in React, follow these steps:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Create a folder structure</strong> in your src directory:
            <pre className="bg-gray-100 p-2 rounded mt-1">
              src/pictures/Events/event1-main.jpg
              src/pictures/Profilepic/profile.jpg
              etc.
            </pre>
          </li>
          
          <li>
            <strong>Import the images</strong> at the top of your React component:
            <pre className="bg-gray-100 p-2 rounded mt-1">
              import eventImage from '../pictures/Events/event1-main.jpg';
              import profilePic from '../pictures/Profilepic/profile.jpg';
            </pre>
          </li>
          
          <li>
            <strong>Use the imported variables</strong> in your JSX:
            <pre className="bg-gray-100 p-2 rounded mt-1">
              &lt;img src={eventImage} alt="Event" /&gt;
              &lt;img src={profilePic} alt="Profile" /&gt;
            </pre>
          </li>
        </ol>
        
        <p className="mt-4 text-gray-700">
          <strong>Important:</strong> This way React will handle the image loading, optimization, and include it in the build process.
        </p>
        
        <p className="mt-2 text-gray-700">
          <strong>Alternative method:</strong> If you have many images, you can create a data file that imports all images and use it throughout your app.
        </p>
      </div>
    </div>
  );
};

export default ImageGuide;
