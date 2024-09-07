import React from 'react'
import "../styles/styles.css"
const { useState, useEffect } = React;
const animalData = [
    {
      name: "Eagle",
      class: "Birds",
      image:
        "https://images.unsplash.com/photo-1481883814866-f6e972dd8916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFnbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Penguin",
      class: "Birds",
      image:
        "https://images.unsplash.com/photo-1462888210965-cdf193fb74de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVuZ3VpbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Parrot",
      class: "Birds",
      image:
        "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFycm90fGVufDB8fDB8fHww"
    },
    {
      name: "Lion",
      class: "Mammals",
      image:
        "https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGlvbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Tiger",
      class: "Mammals",
      image:
        "https://plus.unsplash.com/premium_photo-1661847643150-4e06569d2ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGlnZXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Elephant",
      class: "Mammals",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWxlcGhhbnR8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Cobra",
      class: "Reptiles",
      image:
        "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29icmF8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Lizard",
      class: "Reptiles",
      image:
        "https://plus.unsplash.com/premium_photo-1687418992330-251690b3a817?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGl6YXJkfGVufDB8fDB8fHww"
    },
    {
      name: "Tortoise",
      class: "Reptiles",
      image:
        "https://images.unsplash.com/photo-1463978337744-d16f238e66ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VG9ydG9pc2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Salmon",
      class: "Fish",
      image:
        "https://images.unsplash.com/photo-1668786837877-df83e3d35f3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9uJTIwZmlzaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Shark",
      class: "Fish",
      image:
        "https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hhcmt8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Trout",
      class: "Fish",
      image:
        "https://images.unsplash.com/photo-1516847082403-c9f3e844dc53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VHJvdXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Moose",
      class: "Mammals",
      image:
        "https://plus.unsplash.com/premium_photo-1664304248435-064b16d9bebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9vc2V8ZW58MHx8MHx8fDA%3D"
    }
  ];


 const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleForwardClick = () => {
      setCurrentIndex((pre) => {
        if (pre === animalData.length - 1) {
          return 0;
        }
        return pre + 1;
      });
    };
  
    const handleBackClick = () => {
      setCurrentIndex((pre) => {
        if (pre === 0) {
          return animalData.length - 1;
        }
        return pre - 1;
      });
    };
    const currentAnimal = animalData[currentIndex];
  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
          <p className="text-2xl font-semibold mb-4">{currentAnimal.name}</p>
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={handleBackClick} 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Geri
            </button>
            <img 
              src={currentAnimal.image} 
              alt={currentAnimal.name} 
              className="w-80 h-60 object-cover rounded-lg"
            />
            <button 
              onClick={handleForwardClick} 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              İleri
            </button>
          </div>
        </div>
      </div>
    );
}
export default App