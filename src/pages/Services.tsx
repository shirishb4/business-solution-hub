import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { Bot, Brain, BarChart3, Cpu, Sparkles, Zap, Check, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Intelligent conversational AI that handles customer support 24/7, automates responses, and learns from interactions.',
    features: ['Natural Language Processing', 'Multi-language Support', 'CRM Integration', 'Analytics Dashboard'],
    price: '₹25,000',
    popular: false,
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description: 'Streamline operations with intelligent workflow automation that reduces manual tasks and increases efficiency.',
    features: ['Workflow Optimization', 'Document Processing', 'Email Automation', 'Custom Integrations'],
    price: '₹50,000',
    popular: true,
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and beautiful visualizations.',
    features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization'],
    price: '₹35,000',
    popular: false,
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Custom ML models tailored to your business needs for prediction, classification, and optimization.',
    features: ['Custom Model Training', 'API Integration', 'Model Monitoring', 'Continuous Learning'],
    price: '₹75,000',
    popular: false,
  },
];

const additionalServices = [
  {
    icon: Cpu,
    title: 'AI Consulting',
    description: 'Expert guidance on implementing AI strategies for your business transformation.',
  },
  {
    icon: Sparkles,
    title: 'Custom AI Solutions',
    description: 'Bespoke AI development tailored to your unique business challenges.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block bg-lime text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-fade-in-up">
              Our Services
            </span>
            <h1 className="heading-hero mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              AI Solutions That<br />Transform Business
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Leverage cutting-edge artificial intelligence to automate processes, 
              gain insights, and stay ahead of the competition.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className={`relative rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up ${
                    service.popular 
                      ? 'bg-lime text-primary shadow-2xl scale-105' 
                      : 'bg-background border border-border shadow-lg'
                  }`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {service.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase">
                      Most Popular
                    </span>
                  )}
                  
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                    service.popular ? 'bg-primary' : 'bg-primary'
                  }`}>
                    <service.icon className={`w-6 h-6 ${service.popular ? 'text-lime' : 'text-primary-foreground'}`} />
                  </div>
                  
                  <h3 className={`font-display text-2xl mb-2 ${service.popular ? 'text-primary' : 'text-primary'}`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 ${service.popular ? 'text-primary/80' : 'text-muted-foreground'}`}>
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className={`text-3xl font-bold ${service.popular ? 'text-primary' : 'text-primary'}`}>
                      {service.price}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className={`w-4 h-4 ${service.popular ? 'text-primary' : 'text-lime'}`} />
                        <span className={service.popular ? 'text-primary/90' : 'text-foreground'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 group ${
                    service.popular 
                      ? 'bg-primary text-primary-foreground hover:opacity-90' 
                      : 'bg-primary text-primary-foreground hover:opacity-90'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-section text-primary-foreground mb-4">Additional Services</h2>
              <p className="text-primary-foreground/70 max-w-xl mx-auto">
                Need something custom? We offer specialized AI consulting and bespoke solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {additionalServices.map((service, index) => (
                <div 
                  key={service.title}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-lime flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-primary-foreground mb-3">{service.title}</h3>
                  <p className="text-primary-foreground/70 mb-4">{service.description}</p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-lime font-semibold hover:gap-3 transition-all">
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="heading-section text-primary mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let's discuss how AI can transform your business. Schedule a free consultation today.
            </p>
            <a 
              href="tel:+919819068803" 
              className="btn-primary inline-flex items-center gap-2"
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

export default Services;
