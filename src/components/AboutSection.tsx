import { Linkedin, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-center mb-4">About Me</h2>
          <p className="text-secondary font-semibold text-center mb-12 uppercase tracking-wider text-sm">
            The Mind Behind YESBEE AI Automation
          </p>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Hi, I'm <span className="text-primary font-semibold">Shirish Bhambure</span> — 
                a hands-on problem solver, strategic thinker, and automation evangelist with a passion 
                for helping businesses harness the power of AI.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                My journey into AI automation started from a simple observation: businesses waste 
                countless hours on repetitive tasks that could be automated. I've made it my mission 
                to bridge the gap between complex AI technology and practical business solutions.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                What sets me apart? I don't just understand the technology — I understand business. 
                Every solution I design starts with your specific challenges and ends with measurable 
                results: time saved, costs reduced, and efficiency improved.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                I believe AI should work for your business, not the other way around. My approach is 
                simple: no jargon, no unnecessary complexity, just practical automation that delivers 
                real value.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center pt-6 border-t border-border">
              <span className="text-muted-foreground">Let's connect and discuss how AI can transform your business:</span>
              <a 
                href="https://www.linkedin.com/in/shirish-bhambure-b7687615/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linkedin inline-flex items-center gap-2 text-sm py-3 px-6"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
