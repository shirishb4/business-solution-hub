const MarqueeBanner = () => {
  const text = "WELCOME VISITORS & ANNOUNCE PROMOTIONS";
  
  return (
    <div className="bg-background py-3 border-y border-border overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content flex gap-16">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-primary font-display text-lg tracking-widest whitespace-nowrap flex items-center gap-16">
              <span className="text-magenta">{text}</span>
              <span className="text-cyan">{text}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;
