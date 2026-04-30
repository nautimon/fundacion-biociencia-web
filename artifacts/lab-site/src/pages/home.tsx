import React, { useState, useEffect } from "react";
import { Linkedin, Instagram, ExternalLink, Cpu, ArrowRight, Github, Mail, MapPin, Twitter } from "lucide-react";
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
            Fundación Biociencia
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
                  <span>Extremophile Research & Innovation</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
                  Fundación Biociencia
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  We lead the bioprospecting of resilient microorganisms to develop high-impact industrial solutions and strategic scientific consultancy globally.
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

        {/* 1. HERO SECTION ENDS HERE */}

        {/* 2. INSERT THE BIOLOGICAL LIBRARY HERE */}
        <section id="biobank" className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-serif mb-8">The Biological Library</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Fundación Biociencia maintains one of the world's most singular collections of extremophiles. Our living library contains over **300 microorganisms** isolated from the most hostile environments on Earth, many of which are completely new to science and unregistered elsewhere.
                </p>
                <div className="space-y-6">
                  {[
                    { label: "Novel Species", detail: "Exclusive access to microbes from active Antarctic volcanoes and the high Atacama." },
                    { label: "Industrial Enzymes", detail: "Proprietary catalog of enzymes stable at temperatures exceeding 95°C." },
                    { label: "Strategic Reserves", detail: "Global resource for pharma, food processing, and waste treatment innovation." }
                  ].map((item, i) => (
                    <div key={i} className="border-l-2 border-primary/20 pl-6 py-2">
                      <h4 className="font-serif text-xl mb-1">{item.label}</h4>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-muted aspect-square relative overflow-hidden border border-border">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-40 grayscale" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. RESEARCH & SOLUTIONS SECTION STARTS HERE */}
        
        {/* Industrial Biotechnology Section (Replacing Research Themes) */}
        <section id="research" className="py-24 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl font-serif mb-6">Research & Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our work bridges the gap between biological resilience and industrial application. We leverage deep exploration of extremophilic microorganisms and biochemical characterization to discover high-impact solutions for the global biotechnology market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Biocorrosion Defense", 
                  desc: "Developing sustainable solutions to detect and prevent microbially influenced corrosion (MIC) in critical industrial infrastructure." 
                },
                { 
                  title: "Green Synthesis", 
                  desc: "Utilizing extremophilic microorganisms as eco-friendly alternatives for the synthesis of ferromagnetic nanoparticles." 
                },
                { 
                  title: "Strategic Consultancy", 
                  desc: "Advising government and private sectors on applied biotechnology management and large-scale cultivation protocols." 
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


        {/* Methodology & Global Impact */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-serif mb-6">Mission & Methodology</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    We believe that the future of biotechnology lies in the resilience of Earth's most extreme life. By bridging the gap between field exploration and industrial application, we unlock biological mechanisms that have evolved over millennia.
                  </p>
                  <p>
                    Our approach is fundamentally collaborative. We maintain strategic partnerships with international space agencies and academic institutions, ensuring our discoveries are grounded in rigorous science while providing scalable solutions for the global market.
                  </p>
                  <p>
                    The conservation of extreme biodiversity is a core tenet of our group. By characterizing these unique species, we advocate for the protection of fragile ecosystems in the Atacama Desert and the Antarctic Peninsula.
                  </p>
                </div>
              </div>

              {/* IMPACT METRICS */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 border border-border bg-muted/20 flex flex-col justify-center">
                  <div className="text-3xl font-serif text-primary mb-2">300+</div>
                  <div className="text-sm font-mono text-muted-foreground uppercase tracking-tighter">Exclusive Microorganisms</div>
                </div>
                <div className="p-6 border border-border bg-muted/20 flex flex-col justify-center">
                  <div className="text-3xl font-serif text-primary mb-2">200+</div>
                  <div className="text-sm font-mono text-muted-foreground uppercase tracking-tighter">Scientific Publications</div>
                </div>
                <div className="p-6 border border-border bg-muted/20 flex flex-col justify-center">
                  <div className="text-3xl font-serif text-primary mb-2">60+</div>
                  <div className="text-sm font-mono text-muted-foreground uppercase tracking-tighter">Antarctic Expeditions</div>
                </div>
                <div className="p-6 border border-border bg-muted/20 flex flex-col justify-center">
                  <div className="text-3xl font-serif text-primary mb-2">1st</div>
                  <div className="text-sm font-mono text-muted-foreground uppercase tracking-tighter">Chilean ISS Mission</div>
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
              <a href="https://scholar.google.com/citations?user=bXcdEp4AAAAJ&hl=en" className="text-sm font-medium text-primary hover:underline hidden md:flex items-center gap-1">
                View Google Scholar <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-0">
              {[
                {
                  year: "2021",
                  title: "Extremophilic Oxidoreductases for the Industry: Five Successful Examples With Promising Projections",
                  authors: "Atalah, J., Boehmwald, F., & Blamey, J. M.",
                  venue: "Frontiers in Bioengineering and Biotechnology",
                  link: "https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2021.710035/full"
                },
                {
                  year: "2022",
                  title: "Isolation and characterization of a novel laccase from an Antarctic thermophilic Geobacillus",
                  authors: "Atalah, J. & Blamey, J. M.",
                  venue: "Antarctic Science",
                  link: "https://www.cambridge.org/core/journals/antarctic-science/article/isolation-and-characterization-of-a-novel-laccase-from-an-antarctic-thermophilic-geobacillus/CE74DA739F766CD0A87EDACA5116BA42"
                },
                {
                  year: "2016",
                  title: "A New Thermophilic Nitrilase from an Antarctic Hyperthermophilic Microorganism",
                  authors: "Dennett, G. V. & Blamey, J. M.",
                  venue: "Frontiers in Bioengineering and Biotechnology",
                  link: "https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2016.00005/full"
                },
                {
                  year: "2021",
                  title: "Plants and Natural Products with Activity against Various Types of Coronaviruses: A Review with Focus on SARS-CoV-2",
                  authors: "Fajardo, J., et al.",
                  venue: "MDPI Molecules",
                  link: "https://www.mdpi.com/1420-3049/26/13/4099"
                },
                {
                  year: "2011",
                  title: "Thermophilic bacteria present in a sample from Fumarole Bay, Deception Island",
                  authors: "Muñoz, P. A., Flores, P. A., Boehmwald, F. A., & Blamey, J. M.",
                  venue: "Antarctic Science",
                  link: "https://investigadores.uta.cl/en/publications/thermophilic-bacteria-present-in-a-sample-from-fumarole-bay-decep/"
                },
                {
                  year: "2014",
                  title: "Antarctic Microorganisms as a Source of Enzymes for the Pharmaceutical Industry",
                  authors: "Blamey, J. M., et al.",
                  venue: "Microorganisms",
                  link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bXcdEp4AAAAJ&citation_for_view=bXcdEp4AAAAJ:u-x6o8ySG0sC"
                }
              ].map((pub, i) => (
                <div key={i} className="group py-6 border-b border-border/50 flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-muted/30 transition-colors px-4 -mx-4">
                  <div className="font-mono text-sm text-muted-foreground pt-1 w-16 shrink-0">{pub.year}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                    </h3>
                    <div className="text-sm text-muted-foreground mb-2">{pub.authors}</div>
                    <div className="text-xs font-mono text-primary/80 uppercase tracking-wide">{pub.venue}</div>
                  </div>
                  <div className="hidden md:flex items-start shrink-0">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="rounded-none h-8 text-xs">VIEW</Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Updated Team Section */}
        <section id="team" className="py-24">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-4xl font-serif mb-12">Leadership</h2>
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-start">
                <div className="aspect-[3/4] bg-muted border border-border grayscale hover:grayscale-0 transition-all duration-500">
                  {/* Add Dr. Blamey's Photo here */}
                </div>
                <div>
                  <h3 className="text-3xl font-serif mb-2">Dr. Jenny M. Blamey</h3>
                  <div className="text-primary font-mono text-sm mb-6 uppercase tracking-widest">Scientific Director & Founder</div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Dr. Blamey is a pioneer in the study of extremophiles. With a Ph.D. in Biochemistry from the University of Georgia, her research focuses on the discovery of novel enzymes from organisms living in Earth's most extreme environments, from Antarctic volcanoes to hydrothermal vents.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      200+ International Publications
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Expert in Industrial Biotechnology
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="media" className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-4xl font-serif">Media & Global Impact</h2>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest hidden md:block">Active Missions & Press</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* LEFT COLUMN: THE MAJOR FEATURES */}
              <div className="lg:col-span-2 flex flex-col gap-8">

                {/* Project POLARIS */}
                <div className="flex-1 group relative overflow-hidden border border-border bg-background p-10 flex flex-col justify-between hover:border-primary/30 transition-all">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-mono uppercase tracking-tighter">Live Mission</span>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase">ISS Launch April 2026</span>
                    </div>
                    <h3 className="text-3xl font-serif mb-4">Project POLARIS: Chilean Microbes in Orbit</h3>
                    <p className="text-muted-foreground max-w-xl leading-relaxed">
                      Leading the first Chilean mission to the International Space Station to study extremophile resilience in microgravity, in collaboration with NASA.
                    </p>
                  </div>
                  <a href="https://www.youtube.com/watch?v=1_s7f2jj3K8" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-primary font-mono text-sm hover:gap-4 transition-all">
                    Watch Mission Interview <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Documentary Section */}
                <div className="flex-1 group relative overflow-hidden border border-border bg-muted/30 p-10 flex flex-col justify-between hover:bg-muted/50 transition-all">
                  <div>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Documentary Feature</span>
                    <h3 className="text-2xl font-serif mt-4 mb-4">Enzymes at the End of the World</h3>
                    <p className="text-muted-foreground max-w-lg leading-relaxed">
                      A deep-dive into the foundation's bioprospecting expeditions across the Atacama Desert and the Antarctic Peninsula.
                    </p>
                  </div>
                  <a href="https://youtu.be/GdnF03gqjSo?si=BLrlKmBzKXb21nnH" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-primary font-mono text-sm hover:gap-4 transition-all">
                    View Field Research <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* RIGHT COLUMN: BALANCED PRESS FEED */}
              <div className="flex flex-col gap-4">
                {[
                  { 
                    source: "Scientific American", 
                    title: "Antarctic Microbes Live Life to the Extreme", 
                    link: "https://www.scientificamerican.com/article/antarctic-microbes-live-extreme/" 
                  },
                  { 
                    source: "NASA / USACH", 
                    title: "Historic Mission: Chilean Microbes Bound for the ISS", 
                    link: "https://www.usach.cl/news/investigadora-lidera-historica-mision-chilena-microorganismos-extremofilos-espacio" 
                  },
                  { 
                    source: "The Clinic", 
                    title: "Expanding Biology to Space: The Blamey Interview", 
                    link: "https://www.theclinic.cl/2026/04/09/jenny-blamey-investigadora-antartica-que-llevara-microorganismos-al-espacio-las-condiciones-son-similares-en-terminos-de-temperaturas/" 
                  },
                  { 
                    source: "El Mostrador", 
                    title: "Biotechnology Innovation: From Chile to the Global Market", 
                    link: "https://www.elmostrador.cl/cultura/ciencia-cultura/2024/11/07/investigadora-chilena-lidera-estudio-pionero-que-enviara-microorganismos-al-espacio-exterior/" 
                  },
                  { 
                    source: "LUN", 
                    title: "The Chilean Scientist Hunting for Life in Antarctic Volcanoes", 
                    link: "https://www.lun.com/Pages/NewsDetail.aspx?dt=2026-04-10&PaginaId=24&bodyid=0" 
                  }
                ].map((news, i) => (
                  <a 
                    key={i} 
                    href={news.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col justify-center p-5 border border-border bg-background hover:border-primary/40 hover:bg-muted/30 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] font-mono text-primary uppercase tracking-widest">{news.source}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="text-[13px] font-serif group-hover:text-primary transition-colors leading-tight">{news.title}</h4>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* News & Contact Grid */}
        <section id="news" className="py-24 bg-card border-t border-border">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Recent News / Scientific Ledger */}
            <div>
              <h2 className="text-4xl font-serif mb-8">Recent Milestones</h2>
              <div className="space-y-8">
                {[
                  { 
                    date: "APR 2026", 
                    text: "Project POLARIS: Final payload integration completed for the first Chilean microbial mission to the International Space Station." 
                  },
                  { 
                    date: "MAR 2026", 
                    text: "Field Update: Successful completion of the ECA 62 Antarctic expedition, securing 15 new extremophile strains from volcanic soils." 
                  },
                  { 
                    date: "JAN 2026", 
                    text: "Publication: 'Extremophilic Oxidoreductases for Industrial Applications' published, detailing novel biocatalysts for green chemistry." 
                  },
                  { 
                    date: "NOV 2025", 
                    text: "Partnership: Strategic agreement signed with INACH to expand bioprospecting initiatives in the Antarctic Peninsula." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="font-mono text-[10px] text-primary w-16 shrink-0 pt-1 tracking-widest">{item.date}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {item.text}
                    </div>
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
                    Fundacion Biociencia<br/>
                    Jose Domingo Cañas 2280<br/>
                    Santiago, CHILE
                  </p>
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground mb-2 flex items-center gap-2"><Mail className="w-3 h-3"/> Email</div>
                  <p className="text-foreground mb-4">
                    <a href="mailto:contacto@bioscience.cl" className="hover:text-primary transition-colors">contacto@bioscience.cl</a>
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="w-5 h-5" /></a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>

              <div className="bg-muted/20 border border-border p-6">
                <h3 className="text-lg font-serif mb-4">Business & Institutional Inquiries</h3>
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
                        <option>R&D Strategic Partnership</option>
                        <option>Technical Consultancy</option>
                        <option>Media & Communications</option>
                        <option>Other / Institutional</option>
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
          &copy; {new Date().getFullYear()} Fundación Biociencia. All rights reserved.
        </p>
      </footer>
    </div>
  );
}