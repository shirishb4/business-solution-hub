import { User, MessageSquare, Shield, Zap } from 'lucide-react';

const reasons = [
  {
    icon: User,
    title: 'Founder-Led Delivery',
    description: 'Work directly with me — no handoffs to junior teams. You get senior-level expertise on every project.',
  },
  {
    icon: MessageSquare,
    title: 'Simple Explanations, No Jargon',
    description: 'I translate complex AI concepts into plain language. You\'ll always understand what we\'re building and why.',
  },
  {
    icon: Shield,
    title: 'Ethical & Practical AI',
    description: 'I believe in responsible AI that respects privacy and delivers genuine value — not hype.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround, Measurable Impact',
    description: 'Quick implementation with clear metrics. You\'ll see results, not just promises.',
  },
];

const WhyWorkWithMe = () => {
  return (
    <section id="why-me" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-4 font-display">
            Why Work With Me
          </h2>
          <p className="text-secondary font-semibold uppercase tracking-wider text-sm">
            What Makes YESBEE Different
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-8 h-8 text-secondary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3 font-display">
                {reason.title}
              </h3>
              
              <p className="text-primary-foreground/80 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
