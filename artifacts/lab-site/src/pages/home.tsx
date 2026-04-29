import React, { useState, useEffect } from "react";
import { ArrowRight, Mail, MapPin, ExternalLink, Github, Twitter, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-tight">
            SAG
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#research" className="hover:text-foreground transition-colors">Research</a>
            <a href="#publications" className="hover:text-foreground transition-colors">Publications</a>
            <a href="#team" className="hover:text-foreground transition-colors">Team</a>
            <a href="#news" className="hover:text-foreground transition-colors">News</a>
            <a href="#contact" className="text-primary hover:text-primary/80 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium mb-6">
                  <Cpu className="w-4 h-4" />
                  <span>Computational Neuroscience</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
                  The Synaptic Architecture Group
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Decoding the principles of neural computation. We build mathematical models and machine learning frameworks to understand how physical networks in the brain give rise to cognition, memory, and behavior.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#research">
                    <Button size="lg" className="rounded-none">
                      Explore our research <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                  <a href="#publications">
                    <Button variant="outline" size="lg" className="rounded-none">
                      Latest publications
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden bg-muted border border-border">
                <img 
                  src="/hero-connectome.png" 
                  alt="Abstract neural connectome visualization" 
                  className="object-cover w-full h-full mix-blend-multiply opacity-90"
                />
                <div className="absolute inset-0 border border-border/50 z-10 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do (Research) */}
        <section id="research" className="py-24 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl font-serif mb-6">Research Themes</h2>
              <p className="text-lg text-muted-foreground">
                Our work bridges the gap between biological reality and theoretical abstraction. We leverage large-scale connectomics data, dynamical systems theory, and deep learning to reverse-engineer the brain's algorithms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Network Dynamics & Memory",
                  desc: "Investigating how transient synaptic changes and recurrent network motifs support working memory and rapid learning."
                },
                {
                  title: "Biologically Plausible Learning",
                  desc: "Developing learning rules that operate under biological constraints (local information, delayed reward) yet achieve high performance."
                },
                {
                  title: "Connectome-Constrained Models",
                  desc: "Building functional artificial neural networks whose architectures are strictly dictated by newly available Drosophila and mouse connectomes."
                }
              ].map((theme, i) => (
                <div key={i} className="p-8 border border-border bg-card hover:border-primary/50 transition-colors group">
                  <h3 className="text-xl font-serif mb-4 group-hover:text-primary transition-colors">{theme.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{theme.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-serif mb-6">Methodology & Philosophy</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    We believe that understanding the brain requires a dialogue between theory and data. Theories without data are sterile; data without theories are blind.
                  </p>
                  <p>
                    Our approach is fundamentally collaborative. We maintain close partnerships with experimental labs worldwide, ensuring our models are grounded in biological reality while providing testable predictions for future experiments.
                  </p>
                  <p>
                    Open science is a core tenet of our group. All code, models, and derived datasets from our publications are open-sourced immediately upon preprint release.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 border border-border bg-muted/20 flex flex-col justify-center">
                  <div className="text-3xl font-serif text-primary mb-2">15+</div>
                  <div className="text-sm font-mono text-muted-foreground">Open Source Models</div>
                </div>
                <div className="p-6 border border-border bg-muted/20 flex flex-col justify-center">
                  <div className="text-3xl font-serif text-primary mb-2">8</div>
                  <div className="text-sm font-mono text-muted-foreground">Experimental Partners</div>
                </div>
                <div className="p-6 border border-border bg-muted/20 flex flex-col justify-center">
                  <div className="text-3xl font-serif text-primary mb-2">3.2k</div>
                  <div className="text-sm font-mono text-muted-foreground">Citations</div>
                </div>
                <div className="p-6 border border-border bg-muted/20 flex flex-col justify-center">
                  <div className="text-3xl font-serif text-primary mb-2">100%</div>
                  <div className="text-sm font-mono text-muted-foreground">Reproducible</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-4xl font-serif">Selected Publications</h2>
              <a href="#" className="text-sm font-medium text-primary hover:underline hidden md:flex items-center gap-1">
                View Google Scholar <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-0">
              {[
                {
                  year: "2024",
                  title: "Topological constraints on working memory capacity in recurrent neural networks",
                  authors: "Chen, E., Marcus, J., & Voss, A.",
                  venue: "Nature Neuroscience",
                  link: "#"
                },
                {
                  year: "2024",
                  title: "A biologically plausible alternative to backpropagation through time",
                  authors: "Marcus, J., Torres, L., & Voss, A.",
                  venue: "NeurIPS (Oral)",
                  link: "#"
                },
                {
                  year: "2023",
                  title: "Predicting functional tuning from static connectomes in the Drosophila optic lobe",
                  authors: "Voss, A., et al.",
                  venue: "Science",
                  link: "#"
                },
                {
                  year: "2023",
                  title: "Metabolic constraints drive the emergence of sparse coding",
                  authors: "Torres, L. & Voss, A.",
                  venue: "Physical Review Letters",
                  link: "#"
                },
                {
                  year: "2022",
                  title: "Dendritic computation enhances the expressive power of single neurons",
                  authors: "Chen, E. & Voss, A.",
                  venue: "Cell",
                  link: "#"
                },
                {
                  year: "2022",
                  title: "Continuous-time recurrent networks for dynamic sensory processing",
                  authors: "Marcus, J., Chen, E., & Voss, A.",
                  venue: "Journal of Machine Learning Research",
                  link: "#"
                }
              ].map((pub, i) => (
                <div key={i} className="group py-6 border-b border-border/50 flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-muted/30 transition-colors px-4 -mx-4">
                  <div className="font-mono text-sm text-muted-foreground pt-1 w-16 shrink-0">{pub.year}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                      <a href={pub.link}>{pub.title}</a>
                    </h3>
                    <div className="text-sm text-muted-foreground mb-2">{pub.authors}</div>
                    <div className="text-xs font-mono text-primary/80">{pub.venue}</div>
                  </div>
                  <div className="hidden md:flex items-start shrink-0">
                    <Button variant="ghost" size="sm" className="rounded-none h-8 text-xs">PDF</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-4xl font-serif mb-12">The Team</h2>
            
            {/* PI */}
            <div className="mb-16">
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6 border-b border-border pb-2">Principal Investigator</div>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
                <div className="aspect-square bg-muted border border-border"></div>
                <div>
                  <h3 className="text-2xl font-serif mb-1">Dr. Alexander Voss</h3>
                  <div className="text-primary text-sm mb-4">Associate Professor</div>
                  <p className="text-muted-foreground max-w-2xl leading-relaxed">
                    Alexander received his PhD in Physics from MIT and completed postdoctoral training at the Gatsby Unit, UCL. His research focuses on the intersection of dynamical systems, machine learning, and systems neuroscience. He is a recipient of the Sloan Research Fellowship and the McKnight Scholar Award.
                  </p>
                </div>
              </div>
            </div>

            {/* Members */}
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6 border-b border-border pb-2">Postdocs & PhD Students</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { name: "Dr. Elena Chen", role: "Postdoctoral Fellow", bg: "PhD Neuroscience, Stanford" },
                  { name: "Dr. Lucas Torres", role: "Postdoctoral Fellow", bg: "PhD Physics, ENS Paris" },
                  { name: "Julian Marcus", role: "PhD Candidate", bg: "BS Math & CS, Caltech" },
                  { name: "Sarah Jenkins", role: "PhD Candidate", bg: "BS Bioengineering, MIT" }
                ].map((member, i) => (
                  <div key={i} className="group">
                    <div className="aspect-square bg-muted/50 border border-border mb-4 overflow-hidden"></div>
                    <h4 className="text-lg font-serif">{member.name}</h4>
                    <div className="text-sm text-primary mb-1">{member.role}</div>
                    <div className="text-xs text-muted-foreground">{member.bg}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* News & Contact Grid */}
        <section id="news" className="py-24 bg-card border-t border-border">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* News */}
            <div>
              <h2 className="text-4xl font-serif mb-8">Recent News</h2>
              <div className="space-y-6">
                {[
                  { date: "Oct 2024", text: "Elena's paper on topological constraints is accepted at Nature Neuroscience." },
                  { date: "Sep 2024", text: "Julian's biologically plausible learning rule paper is selected for an Oral presentation at NeurIPS." },
                  { date: "Aug 2024", text: "Welcome to Sarah Jenkins, who joins the lab as a new PhD student!" },
                  { date: "Jun 2024", text: "Alexander gives a keynote at the Cosyne conference in Lisbon." },
                  { date: "Jan 2024", text: "The lab receives an R01 grant from NIH to study memory consolidation mechanisms." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="font-mono text-xs text-muted-foreground w-20 shrink-0 pt-1">{item.date}</div>
                    <div className="text-sm">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div id="contact">
              <h2 className="text-4xl font-serif mb-8">Contact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 text-sm">
                <div>
                  <div className="font-mono text-xs text-muted-foreground mb-2 flex items-center gap-2"><MapPin className="w-3 h-3"/> Location</div>
                  <p className="text-foreground">
                    Computational Sciences Building<br/>
                    Room 402<br/>
                    1200 Tech Avenue<br/>
                    San Francisco, CA 94107
                  </p>
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground mb-2 flex items-center gap-2"><Mail className="w-3 h-3"/> Email</div>
                  <p className="text-foreground mb-4">
                    <a href="mailto:contact@synapticarch.org" className="hover:text-primary transition-colors">contact@synapticarch.org</a>
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="w-5 h-5" /></a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>

              <div className="bg-muted/20 border border-border p-6">
                <h3 className="text-lg font-serif mb-4">Inquire about positions</h3>
                {formState === "success" ? (
                  <div className="text-sm text-green-600 bg-green-50/50 p-4 border border-green-100">
                    Thank you. We have received your inquiry and will be in touch soon.
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium">Name</label>
                        <input required type="text" className="w-full h-9 px-3 border border-border bg-background text-sm rounded-none focus:outline-none focus:border-primary" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium">Email</label>
                        <input required type="email" className="w-full h-9 px-3 border border-border bg-background text-sm rounded-none focus:outline-none focus:border-primary" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium">Interest</label>
                      <select className="w-full h-9 px-3 border border-border bg-background text-sm rounded-none focus:outline-none focus:border-primary">
                        <option>Postdoctoral Position</option>
                        <option>PhD Program</option>
                        <option>Collaboration</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium">Message</label>
                      <textarea required rows={3} className="w-full p-3 border border-border bg-background text-sm rounded-none focus:outline-none focus:border-primary resize-none"></textarea>
                    </div>
                    <Button type="submit" className="w-full rounded-none" disabled={formState === "submitting"}>
                      {formState === "submitting" ? "Sending..." : "Send Inquiry"}
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border bg-background text-center">
        <p className="text-xs text-muted-foreground font-mono">
          &copy; {new Date().getFullYear()} The Synaptic Architecture Group. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
