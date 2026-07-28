import { motion } from 'motion/react';
import { MapPin, Download, CheckCircle2 } from 'lucide-react';

export default function Hub() {
  return (
    <div className="pt-20 pb-32">
      <div className="bg-muted/30 py-20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dharmanagar AI & Data Hub</h1>
          <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Strategic Infrastructure in Tripura
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The Dharmanagar AI & Data Hub is a landmark ₹55–80 Cr investment aimed at building a state-of-the-art technological epicenter in Northeast India. This facility is engineered to provide Tier-III equivalent reliability, designed specifically to host dense AI compute nodes and massive data lakes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              By establishing this hub locally, we eliminate the latency and bandwidth costs associated with routing data to central India or abroad, providing a sovereign, high-speed backbone for the region's digital economy.
            </p>
            
            <div className="space-y-4">
              {['Redundant power and cooling systems', 'Direct fiber optic connectivity', 'Physical and biometric security perimeters', 'Green energy initiatives'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600" alt="Data Center Hub" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Economic Impact */}
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 mb-24 border border-primary/10">
          <h2 className="text-3xl font-bold mb-8 text-center">Economic Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-card rounded-2xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="font-semibold mb-2">Direct Jobs</div>
              <p className="text-sm text-muted-foreground">High-skilled tech positions created in Phase 1.</p>
            </div>
            <div className="p-6 bg-card rounded-2xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="font-semibold mb-2">Indirect Opportunities</div>
              <p className="text-sm text-muted-foreground">Spurring growth in local support and vendor ecosystems.</p>
            </div>
            <div className="p-6 bg-card rounded-2xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">₹200Cr</div>
              <div className="font-semibold mb-2">Projected Regional GDP</div>
              <p className="text-sm text-muted-foreground">Estimated contribution over the next 5 years.</p>
            </div>
          </div>
        </div>

        {/* Downloads */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Downloads</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border hover:border-primary transition-colors rounded-xl font-medium">
              <Download className="w-4 h-4" />
              Project Proposal
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border hover:border-primary transition-colors rounded-xl font-medium">
              <Download className="w-4 h-4" />
              Brochure
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border hover:border-primary transition-colors rounded-xl font-medium">
              <Download className="w-4 h-4" />
              Executive Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
