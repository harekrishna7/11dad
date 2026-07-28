import { motion } from 'motion/react';
import { TrendingUp, PieChart, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Investors() {
  return (
    <div className="pt-20 pb-32">
      <div className="bg-muted/30 py-20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Investor Relations</h1>
          <p className="text-xl text-muted-foreground">Invest in the foundational AI and Data infrastructure of Northeast India.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        
        {/* Investment Highlights */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">Investment Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "First Mover Advantage", desc: "DADsync is establishing the first hyperscale-ready data hub in the region, capturing the massive untapped demand for local compute and storage.", icon: <Zap className="w-6 h-6" /> },
              { title: "High-Margin AI Compute", desc: "The shift towards AI necessitates high-margin GPU clusters. We are positioning our infrastructure specifically for these intensive, lucrative workloads.", icon: <TrendingUp className="w-6 h-6" /> },
              { title: "Strategic Location", desc: "Dharmanagar offers a unique geographical advantage for edge computing, reducing latency across Northeast India and neighboring cross-border markets.", icon: <PieChart className="w-6 h-6" /> },
              { title: "Government Support", desc: "Aligned with Digital India initiatives, benefiting from favorable regional IT policies, subsidies, and power tariffs.", icon: <ShieldCheck className="w-6 h-6" /> }
            ].map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-8 bg-card border border-border rounded-2xl"
              >
                <div className="text-primary flex-shrink-0">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Financial Snapshot */}
        <div className="mb-24 bg-primary text-primary-foreground rounded-3xl p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Financial Snapshot</h2>
              <p className="text-primary-foreground/80 mb-8 text-lg">
                Phase 1 execution requires a strategic capital infusion of ₹55–80 Cr, structured to achieve operational breakeven within 18-24 months of go-live.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center justify-between border-b border-primary-foreground/20 pb-2 text-white">
                  <span>Phase 1 Capital Requirement</span>
                  <span className="font-bold">₹55–80 Cr</span>
                </li>
                <li className="flex items-center justify-between border-b border-primary-foreground/20 pb-2 text-white">
                  <span>Target IRR</span>
                  <span className="font-bold">24-28%</span>
                </li>
                <li className="flex items-center justify-between border-b border-primary-foreground/20 pb-2 text-white">
                  <span>Initial Storage Capacity</span>
                  <span className="font-bold">1 PB Enterprise</span>
                </li>
              </ul>
              <Link to="/contact" className="inline-flex px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-colors">
                Request Detailed Deck
              </Link>
            </div>
            <div className="relative h-64 md:h-auto md:aspect-square bg-primary-foreground/10 rounded-2xl border border-primary-foreground/20 flex items-center justify-center">
               <div className="text-center">
                 <PieChart className="w-24 h-24 mx-auto mb-4 opacity-50" />
                 <p className="font-medium opacity-80">Detailed Financials Available Under NDA</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
