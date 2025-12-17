import { Clock, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';

const useCases = [
  {
    title: 'E-commerce Order Processing',
    before: 'Manual order verification taking 3 hours daily',
    after: 'Fully automated order processing with AI validation',
    metrics: [
      { icon: Clock, value: '3 hrs/day', label: 'Time Saved' },
      { icon: DollarSign, value: '40%', label: 'Cost Reduced' },
      { icon: TrendingUp, value: '99.5%', label: 'Accuracy' },
    ],
  },
  {
    title: 'Customer Support Automation',
    before: '200+ daily inquiries handled manually by 5 agents',
    after: 'AI chatbot handles 80% of queries automatically',
    metrics: [
      { icon: Clock, value: '24/7', label: 'Availability' },
      { icon: DollarSign, value: '60%', label: 'Cost Saved' },
      { icon: TrendingUp, value: '< 5 sec', label: 'Response Time' },
    ],
  },
  {
    title: 'Financial Reporting',
    before: 'Weekly reports compiled manually over 2 days',
    after: 'Real-time dashboards with automated insights',
    metrics: [
      { icon: Clock, value: '16 hrs/week', label: 'Time Saved' },
      { icon: DollarSign, value: '100%', label: 'Error Reduction' },
      { icon: TrendingUp, value: 'Real-time', label: 'Data Access' },
    ],
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">Use Cases</h2>
          <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-4">
            Real Results, Real Businesses
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            See how AI automation transforms operations and delivers measurable impact.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <h3 className="heading-card text-primary mb-6">{useCase.title}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-destructive/10 rounded-xl p-4">
                  <span className="text-destructive font-semibold uppercase text-xs tracking-wider">Before</span>
                  <p className="text-foreground mt-2">{useCase.before}</p>
                </div>
                
                <div className="bg-secondary/20 rounded-xl p-4 relative">
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
                    <ArrowRight className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-secondary font-semibold uppercase text-xs tracking-wider">After</span>
                  <p className="text-foreground mt-2">{useCase.after}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {useCase.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <metric.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary font-display">{metric.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
