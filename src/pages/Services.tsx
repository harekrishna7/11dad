import { motion } from 'motion/react';
import { Cpu, Server, Database, Cloud, LineChart, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Compute",
      desc: "High-performance compute clusters optimized for deep learning, training, and inference workloads with scalable resource allocation."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "GPU Cloud",
      desc: "On-demand access to premium GPUs (NVIDIA architecture) for rendering, simulation, and parallel processing tasks without the hardware overhead."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Processing",
      desc: "Robust pipelines and big data frameworks to ingest, clean, and process massive datasets securely and efficiently."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      desc: "Scalable, resilient virtualized environments supporting microservices, containerization (Kubernetes), and serverless architectures."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Enterprise Storage",
      desc: "1 PB+ capacity object, block, and file storage systems featuring end-to-end encryption and multi-region redundancy."
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "AI Consulting",
      desc: "Expert guidance on integrating machine learning models, optimizing workflows, and building custom AI solutions for your specific industry."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Managed Services",
      desc: "24/7 proactive monitoring, security management, and technical support to ensure your infrastructure runs flawlessly."
    }
  ];

  return (
    <div className="pt-20 pb-32">
      <div className="bg-muted/30 py-20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">Comprehensive, enterprise-grade technology solutions designed to accelerate your business.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <div className="p-4 bg-primary/5 text-primary rounded-xl mb-6 inline-block group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
