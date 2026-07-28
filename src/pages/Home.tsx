import { motion } from 'motion/react';
import { ArrowRight, Cpu, Server, Network, Shield, Building2, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 dark:to-background pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Infrastructure Available Now
            </motion.div>
            
            <motion.h1 
              {...fadeIn}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            >
              Powering Northeast India's <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                AI Future
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              AI • Cloud • Data Infrastructure • HPC. The premier hub for advanced computing, enabling enterprises, startups, and research across the region.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground rounded-full text-base font-semibold hover:bg-secondary/80 transition-all flex items-center justify-center gap-2">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Highlights Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Building scalable, resilient infrastructure to support the demands of modern AI workloads.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "₹55–80 Cr", subtitle: "Phase 1 Investment", icon: <Building2 className="w-8 h-8" /> },
              { title: "1 PB+", subtitle: "Enterprise Storage", icon: <Server className="w-8 h-8" /> },
              { title: "AI Compute", subtitle: "GPU-Accelerated Platform", icon: <Cpu className="w-8 h-8" /> },
              { title: "150+", subtitle: "Direct Jobs Created", icon: <Briefcase className="w-8 h-8" /> }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border flex flex-col items-center text-center group hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="p-4 bg-primary/10 text-primary rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.title}</h3>
                <p className="text-muted-foreground">{stat.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DADsync */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why DADsync?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We are building the first hyperscale-ready AI and Data infrastructure in Northeast India, strategically located in Dharmanagar to serve growing regional and global demands.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Unmatched Performance", desc: "HPC clusters designed for deep learning, rendering, and complex simulations.", icon: <Cpu className="w-6 h-6" /> },
                  { title: "Secure & Compliant", desc: "Enterprise-grade security adhering to global data privacy standards including GDPR.", icon: <Shield className="w-6 h-6" /> },
                  { title: "Scalable Architecture", desc: "Microservices-ready cloud environments that grow seamlessly with your business.", icon: <Network className="w-6 h-6" /> }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000" 
                alt="Server Infrastructure" 
                className="relative rounded-3xl shadow-xl object-cover aspect-square md:aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
