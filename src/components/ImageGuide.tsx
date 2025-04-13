
import React from 'react';

const ImageGuide = () => {
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md max-w-4xl mt-8">
      <h2 className="text-2xl font-bold mb-4">How to Use Local Images in Your Portfolio</h2>
      
      <div className="space-y-6">
        <p className="text-lg">
          To use your own profile image and other local images in the portfolio, follow these steps:
        </p>
        
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Create the folder structure</strong> in your project:
            <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
              src/pictures/Profilepic/profile.jpg {/* Your profile picture */}
              src/pictures/Projects/   {/* Project screenshots */}
              src/pictures/Events/     {/* Event photos */}
            </pre>
          </li>
          
          <li>
            <strong>Add your images</strong> to these folders. Make sure they're properly sized and optimized.
          </li>
          
          <li>
            <strong>Update the code in HeroSection.tsx</strong> to use your profile image:
            <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
              {`// Uncomment this line after adding your profile image
// import profileImage from '../pictures/Profilepic/profile.jpg';

// Then update the img tag to use the imported image:
<img 
  src={profileImage} 
  alt="Profile"
  className="profile-image w-64 h-64 md:w-80 md:h-80 object-cover"
/>`}
            </pre>
          </li>
          
          <li>
            <strong>For other sections</strong> like Projects and Events, follow the same pattern:
            <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
              {`// In your component file (e.g., ProjectsSection.tsx)
import projectImage from '../pictures/Projects/project1.jpg';

// Then use it in your JSX
<img src={projectImage} alt="Project Screenshot" />`}
            </pre>
          </li>
        </ol>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
          <p className="text-yellow-700">
            <strong>Important Note:</strong> Make sure your image files actually exist in the specified locations before importing them. Missing files will cause build errors.
          </p>
        </div>
        
        <p className="mt-4">
          If you need to organize many images, consider using the pattern shown in <code>src/data/eventImages.ts</code> to create structured data with your images.
        </p>
      </div>
    </div>
  );
};

export default ImageGuide;
