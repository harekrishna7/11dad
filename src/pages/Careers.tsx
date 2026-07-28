import { motion } from 'motion/react';
import { ArrowRight, Code, Database, Server, Terminal, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Careers() {
  const jobs = [
    { title: "Chief Technology Officer (CTO)", dept: "Executive", type: "Full-time", location: "Dharmanagar / Remote", icon: <Terminal className="w-5 h-5" /> },
    { title: "Chief Operating Officer (COO)", dept: "Executive", type: "Full-time", location: "Dharmanagar", icon: <Server className="w-5 h-5" /> },
    { title: "Chief Financial Officer (CFO)", dept: "Executive", type: "Full-time", location: "Dharmanagar", icon: <Database className="w-5 h-5" /> },
    { title: "Senior AI Engineer", dept: "Engineering", type: "Full-time", location: "Dharmanagar", icon: <BrainCircuit className="w-5 h-5" /> },
    { title: "Cloud Infrastructure Engineer", dept: "Engineering", type: "Full-time", location: "Dharmanagar", icon: <Server className="w-5 h-5" /> },
    { title: "Data Engineer", dept: "Engineering", type: "Full-time", location: "Dharmanagar", icon: <Code className="w-5 h-5" /> }
  ];

  return (
    <div className="pt-20 pb-32">
      <div className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Join the Revolution</h1>
          <p className="text-xl opacity-90 text-white">Help us build the technological backbone of Northeast India. We're looking for visionaries and builders.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Open Positions</h2>
          
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl">
                    {job.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs font-medium px-2.5 py-1 bg-muted text-muted-foreground rounded-md">{job.dept}</span>
                      <span className="text-xs font-medium px-2.5 py-1 bg-muted text-muted-foreground rounded-md">{job.type}</span>
                      <span className="text-xs font-medium px-2.5 py-1 bg-muted text-muted-foreground rounded-md">{job.location}</span>
                    </div>
                  </div>
                </div>
                
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all self-start md:self-auto mt-2 md:mt-0">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-8 bg-muted rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Don't see a fit?</h3>
            <p className="text-muted-foreground mb-6">We are always looking for talented individuals. Send your resume to us directly.</p>
            <Link to="/contact" className="inline-flex px-6 py-3 bg-background border border-border text-foreground rounded-full text-sm font-medium hover:bg-card transition-colors">
              Contact HR
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
