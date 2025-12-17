import { Bot, RefreshCw, BarChart3, Link2, Brain, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Agents for Business Operations',
    problem: 'Manual customer support draining your team\'s time?',
    automation: 'Deploy intelligent AI agents that handle inquiries 24/7',
    result: 'Reduce response time by 80% while freeing your team for high-value work',
  },
  {
    icon: RefreshCw,
    title: 'Workflow & Process Automation',
    problem: 'Repetitive tasks consuming hours every week?',
    automation: 'Automate data entry, approvals, and multi-step processes',
    result: 'Save 15+ hours per week and eliminate human error',
  },
  {
    icon: BarChart3,
    title: 'AI-Powered Reporting & Insights',
    problem: 'Spending hours compiling reports manually?',
    automation: 'Automated dashboards and AI-generated insights',
    result: 'Get real-time business intelligence without lifting a finger',
  },
  {
    icon: Link2,
    title: 'CRM, ERP & Tool Integrations',
    problem: 'Data scattered across multiple disconnected systems?',
    automation: 'Seamless integrations that sync your entire tech stack',
    result: 'Single source of truth with zero manual data transfer',
  },
  {
    icon: Brain,
    title: 'Custom AI Automation Solutions',
    problem: 'Unique business challenge that needs a tailored solution?',
    automation: 'Bespoke AI systems designed specifically for your needs',
    result: 'Solutions that fit like a glove, not one-size-fits-all',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">Services</h2>
          <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-4">
            Outcome-Driven AI Solutions
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every service is designed around one goal: delivering measurable business results through intelligent automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-service group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="heading-card text-primary mb-4">{service.title}</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-destructive font-semibold uppercase text-xs tracking-wider">Problem</span>
                  <p className="text-muted-foreground mt-1">{service.problem}</p>
                </div>
                
                <div>
                  <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1">
                    <ArrowRight className="w-3 h-3" /> Automation
                  </span>
                  <p className="text-muted-foreground mt-1">{service.automation}</p>
                </div>
                
                <div>
                  <span className="text-secondary font-semibold uppercase text-xs tracking-wider">Result</span>
                  <p className="text-foreground font-medium mt-1">{service.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
