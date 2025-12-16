import robot1 from '@/assets/robot-1.jpg';

const MissionSection = () => {
  return (
    <section id="mission" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Mission Card */}
          <div className="card-navy flex-1 max-w-md">
            <h2 className="heading-section text-primary-foreground mb-6">Our Mission</h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              At AI Automation, we strive to revolutionize the way businesses operate using cutting-edge artificial intelligence. 
              Our mission is to empower organizations with innovative solutions that enhance efficiency and drive growth.
            </p>
            <button className="btn-outline-light border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </button>
          </div>
          
          {/* Robot Image */}
          <div className="flex-1 flex justify-center">
            <img 
              src={robot1} 
              alt="AI Robot Assistant" 
              className="w-64 h-64 object-contain animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
