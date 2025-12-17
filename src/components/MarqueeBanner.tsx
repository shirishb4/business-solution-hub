const MarqueeBanner = () => {
  const items = [
    'AI AGENTS',
    'WORKFLOW AUTOMATION',
    'PROCESS OPTIMIZATION',
    'BUSINESS INTELLIGENCE',
    'CUSTOM AI SOLUTIONS',
    'CRM INTEGRATION',
    'COST REDUCTION',
    'TIME SAVINGS',
  ];

  return (
    <div className="bg-secondary py-4 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          {[...items, ...items].map((item, index) => (
            <span key={index} className="inline-flex items-center mx-8">
              <span className="w-2 h-2 bg-secondary-foreground rounded-full mr-4" />
              <span className="text-secondary-foreground font-display text-lg uppercase tracking-wider">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;
