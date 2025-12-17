import { Quote, Linkedin, Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Shirish transformed our customer support operations. What used to take our team hours now happens automatically. The ROI was visible within weeks.",
    author: "Business Owner",
    company: "E-commerce Company",
    rating: 5,
  },
  {
    quote: "Finally, someone who explains AI in terms I can understand. No jargon, just solutions that work. Highly recommend working with YESBEE.",
    author: "Operations Manager",
    company: "Logistics Firm",
    rating: 5,
  },
  {
    quote: "The automation workflows Shirish built for us have saved countless hours. His practical approach to AI is exactly what businesses need.",
    author: "Founder",
    company: "Tech Startup",
    rating: 5,
  },
];

const SocialProof = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">What People Say</h2>
          <p className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Trusted by Business Leaders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-8 shadow-lg border border-border relative"
            >
              <Quote className="w-10 h-10 text-secondary/30 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Follow my work and insights on AI automation</p>
          <a 
            href="https://www.linkedin.com/in/shirish-bhambure-b7687615/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-linkedin inline-flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            Follow My Work on LinkedIn
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
