import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-20 pb-32">
      <div className="bg-muted/30 py-20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About DADsync</h1>
          <p className="text-xl text-muted-foreground">Pioneering the next generation of cloud and AI infrastructure in Northeast India.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              DADsync is established with a vision to democratize access to high-performance computing and enterprise-grade cloud storage. Located strategically in Dharmanagar, we serve as the critical technological bridge for Northeast India, empowering local enterprises, startups, and academic institutions with world-class infrastructure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our facilities are designed from the ground up for AI workloads, offering GPU clusters, scalable object storage, and managed services that rival global providers but with data sovereignty and regional proximity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="text-muted-foreground mb-8">
              To transform Northeast India into a premier technology and innovation hub by providing foundational digital infrastructure.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <ul className="space-y-3 text-muted-foreground list-disc list-inside">
              <li>Deliver ultra-low latency cloud services to regional businesses.</li>
              <li>Provide cost-effective HPC and GPU clusters for AI research.</li>
              <li>Foster a robust digital ecosystem through strategic partnerships.</li>
              <li>Ensure 100% data sovereignty with secure, compliant facilities.</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Roadmap</h2>
          <div className="max-w-4xl mx-auto">
            {[
              { year: "Phase 1 (Current)", title: "Core Infrastructure Setup", desc: "Establishing the primary data center in Dharmanagar, 1 PB initial enterprise storage, and foundational networking." },
              { year: "Phase 2", title: "AI Compute Expansion", desc: "Deployment of dedicated GPU clusters (NVIDIA H100s) and launch of managed AI platform services." },
              { year: "Phase 3", title: "Regional Edge Network", desc: "Expanding edge computing nodes across other Northeast states to reduce latency for end-users." },
              { year: "Phase 4", title: "Global Integration", desc: "Establishing direct fiber peering with major global cloud providers and international gateways." }
            ].map((phase, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 mb-8 relative">
                {/* Timeline line */}
                {i !== 3 && <div className="hidden md:block absolute left-8 top-12 bottom-[-2rem] w-px bg-border z-0" />}
                
                <div className="md:w-48 flex-shrink-0 relative z-10">
                  <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg w-full md:w-auto">
                    {phase.year}
                  </div>
                </div>
                <div className="bg-card border border-border p-6 rounded-xl flex-grow relative z-10 hover:border-primary/50 transition-colors">
                  <h4 className="text-xl font-bold mb-2">{phase.title}</h4>
                  <p className="text-muted-foreground">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
