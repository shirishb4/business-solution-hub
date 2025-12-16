import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { Users, Target, Lightbulb, Award, Heart, Rocket } from 'lucide-react';

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge AI solutions that transform businesses.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We build trust through transparency, honesty, and ethical AI practices in everything we do.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, ensuring solutions meet their unique needs.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality solutions that exceed expectations.',
  },
];

const team = [
  {
    name: 'Shirish Bhambure',
    role: 'Founder & CEO',
    description: 'Visionary leader with 15+ years in technology and business automation, driving AI innovation.',
  },
  {
    name: 'AI Development Team',
    role: 'Technical Experts',
    description: 'Skilled engineers and data scientists building intelligent solutions for modern businesses.',
  },
  {
    name: 'Client Success Team',
    role: 'Support & Growth',
    description: 'Dedicated professionals ensuring seamless implementation and ongoing client satisfaction.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block bg-lime text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-fade-in-up">
              About Us
            </span>
            <h1 className="heading-hero mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Empowering Businesses<br />Through AI Innovation
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              YesBee AI Automation is dedicated to transforming how businesses operate 
              through intelligent automation and cutting-edge artificial intelligence.
            </p>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-lime flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h2 className="heading-section text-primary-foreground">Our Story</h2>
              </div>
              
              <div className="space-y-6 text-primary-foreground/80">
                <p className="text-lg leading-relaxed animate-fade-in-up">
                  Founded with a vision to democratize AI technology for businesses of all sizes, 
                  YesBee AI Automation began as a small consultancy helping local enterprises 
                  streamline their operations through intelligent automation.
                </p>
                <p className="text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  Today, we have grown into a comprehensive AI solutions provider, serving clients 
                  across industries with chatbots, business automation, data analytics, and 
                  machine learning solutions. Our journey is defined by continuous innovation 
                  and an unwavering commitment to client success.
                </p>
                <p className="text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  We believe that AI should be accessible, practical, and transformative. 
                  Every solution we create is designed to deliver measurable results and 
                  empower businesses to thrive in the digital age.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                  <Target className="w-6 h-6 text-lime" />
                </div>
              </div>
              <h2 className="heading-section text-primary mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                These principles guide everything we do and shape how we serve our clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div 
                  key={value.title}
                  className="bg-muted/30 rounded-2xl p-6 border border-border hover:border-lime/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-lime" />
                  </div>
                  <h3 className="font-display text-xl text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-lime flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h2 className="heading-section text-primary mb-4">Our Team</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Meet the dedicated professionals behind YesBee AI Automation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div 
                  key={member.name}
                  className="bg-background rounded-2xl p-8 border border-border shadow-lg text-center hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                    <span className="font-display text-2xl text-lime">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-primary mb-1">{member.name}</h3>
                  <p className="text-lime font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="heading-section text-primary-foreground mb-4">Ready to Transform Your Business?</h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Join the growing number of businesses leveraging AI to drive growth and efficiency.
            </p>
            <a 
              href="tel:+919819068803" 
              className="bg-lime text-primary px-8 py-4 rounded-full font-semibold hover:bg-lime/90 transition-all duration-300 inline-flex items-center gap-2"
            >
              Call +91 98190 68803
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default About;
