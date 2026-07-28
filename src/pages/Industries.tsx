import { motion } from 'motion/react';
import { Building, Factory, Lightbulb, GraduationCap, Store, FlaskConical } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Government",
      desc: "Secure, sovereign data infrastructure for e-governance initiatives, citizen services, and smart city deployments."
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Enterprises",
      desc: "Robust cloud solutions and scalable storage to power enterprise resource planning and large-scale data analytics."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Startups",
      desc: "Agile, cost-effective infrastructure and GPU access to help tech startups rapidly prototype and scale AI models."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Universities",
      desc: "Dedicated computing clusters for academic institutions to facilitate complex research and technical education."
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "MSMEs",
      desc: "Accessible managed cloud services enabling small and medium enterprises to digitize operations without massive capital expenditure."
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Research Labs",
      desc: "High-performance computing resources designed for bioinformatics, climate modeling, and deep learning simulations."
    }
  ];

  return (
    <div className="pt-20 pb-32">
      <div className="bg-muted/30 py-20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-muted-foreground">Tailored infrastructure solutions empowering diverse sectors across Northeast India.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all"
            >
              <div className="text-primary mb-6">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
              <p className="text-muted-foreground">
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
