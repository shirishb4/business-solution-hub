import { useState, useEffect } from 'react';
import robot1 from '@/assets/robot-1.jpg';
import robot2 from '@/assets/robot-2.jpg';
import digitalHumans from '@/assets/digital-humans.jpg';
import cloudData from '@/assets/cloud-data.jpg';
import innovation from '@/assets/innovation.jpg';

const images = [
  { src: robot1, alt: 'AI Robot with magnifying glass' },
  { src: digitalHumans, alt: 'Digital holographic humans' },
  { src: robot2, alt: 'Friendly blue AI robot' },
  { src: cloudData, alt: 'Cloud computing and data' },
  { src: innovation, alt: 'Innovation light bulb with brain' },
];

const ImageCarousel = () => {
  const [currentSet, setCurrentSet] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSet + i) % images.length;
      visible.push(images[index]);
    }
    return visible;
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-8 items-center">
          {getVisibleImages().map((image, index) => (
            <div 
              key={`${image.alt}-${index}`}
              className={`transition-all duration-700 ease-in-out transform ${
                index === 1 ? 'scale-110 z-10' : 'scale-90 opacity-80'
              }`}
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg bg-background">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSet(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSet ? 'bg-primary w-6' : 'bg-primary/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
