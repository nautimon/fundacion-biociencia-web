import React, { useState, useEffect } from "react";
import { ArrowRight, Mail, MapPin, ExternalLink, Instagram, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;

      // Mobile triggers at 10% of screen height; Desktop stays at 30%
      const threshold = isMobile 
        ? window.innerHeight * 0.1 
        : window.innerHeight * 0.3;

      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run immediately on mount

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
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background py-4 shadow-xl border-b border-border" 
            : "bg-transparent py-6 md:py-10 border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* LOGO */}
          <a href="#" className="block shrink-0 relative z-[60] outline-none">
            <div className="relative h-12 md:h-20 flex items-center">
               <img 
                src="/logo-biociencia-black.svg" 
                alt="Fundación Biociencia" 
                className={`transition-all duration-700 w-auto object-contain absolute left-0 ${
                  isScrolled ? "h-10 md:h-14 opacity-100" : "h-12 md:h-20 opacity-0"
                }`} 
              />
              <img 
                src="/biociencia-logo-white.svg" 
                alt="Fundación Biociencia" 
                className={`transition-all duration-700 w-auto object-contain relative ${
                  isScrolled ? "h-10 md:h-14 opacity-0" : "h-12 md:h-20 opacity-100"
                }`} 
              />
            </div>
          </a>

          {/* WEB MENU */}
          <nav className={`hidden md:flex items-center gap-x-8 transition-all duration-500 ${
            isScrolled ? "mt-7" : "mt-10"
          }`}>
            {[
              { name: "Collection", href: "#collection" },
              { name: "About", href: "#pioneering" },
              { name: "Research", href: "#research" },
              { name: "Services", href: "#services" },
              { name: "Leadership", href: "#leadership" },
              { name: "Legacy", href: "#legacy" },
              { name: "Media", href: "#media" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-[13px] font-medium tracking-wide transition-colors duration-500 no-underline ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button 
            className={`md:hidden p-4 -mr-4 relative z-[100] transition-colors duration-500 ${
              isScrolled || isMenuOpen ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
              <div className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "w-0 opacity-0" : "w-6"}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
            </div>
          </button>
        </div>

        {/* MOBILE OVERLAY */}
        <div 
          className={`fixed inset-0 bg-background z-[80] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
            isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center gap-6">
            {[
              { name: "Collection", href: "#collection" },
              { name: "About", href: "#pioneering" },
              { name: "Research", href: "#research" },
              { name: "Services", href: "#services" },
              { name: "Leadership", href: "#leadership" },
              { name: "Legacy", href: "#legacy" },
              { name: "Media", href: "#media" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-serif italic text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

        <main className="flex-1">
          {/* HERO SECTION */}
          <section className="relative w-full h-[85vh] min-h-[700px] md:min-h-[600px] overflow-hidden bg-muted">
            <img 
              src="/antarctica02.jpg" 
              alt="Fundación Biociencia Antarctica Expedition"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/20" /> 
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

            {/* Changed justify-end to justify-center on mobile to give the text vertical room */}
            <div className="container relative z-10 mx-auto h-full flex flex-col justify-center md:justify-end pt-32 md:pt-0 pb-12 md:pb-24 px-6 md:px-12">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-mono uppercase tracking-[0.3em]">
                    FIELD EXPEDITION: ANTARCTICA
                  </span>
                </div>

                {/* Responsive H1: 4xl on mobile, 8xl on desktop */}
                <h1 className="text-4xl md:text-8xl font-serif text-white mb-6 leading-tight">
                  Science at the <br className="hidden md:block" /> 
                  <span className="italic">Edge of Existence</span>
                </h1>

                <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10 font-light">
                  From volcanic sampling to orbital missions, we explore the most extreme environments on Earth and beyond to unlock the future of biotechnology.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#research" 
                    className="px-8 py-4 bg-slate-800/60 border border-slate-700/40 backdrop-blur-sm text-white font-mono text-sm uppercase tracking-widest hover:bg-slate-800/80 transition-all text-center"
                  >
                    Our Research
                  </a>

                  <a 
                    href="#pioneering" 
                    className="px-8 py-4 bg-slate-800/60 border border-slate-700/40 backdrop-blur-sm text-white font-mono text-sm uppercase tracking-widest hover:bg-slate-800/80 transition-all text-center"
                  >
                    The Foundation
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 1. HERO SECTION ENDS HERE */}
          <section id="collection" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-5xl font-light tracking-tight">The Superpowers of Life</h2>
              <p className="text-xl text-muted-foreground mt-4">How extremophiles survive where nothing else can.</p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1: Thermophiles */}
            <div className="overflow-hidden border border-border rounded-3xl bg-card flex flex-col items-start">
              <div className="w-full aspect-square overflow-hidden border-b border-border">
                <img src="/thermophile.png" alt="Thermophile" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-medium mb-3">Thermophiles</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thriving in volcanic vents and hot springs at temperatures over 80°C by using heat-stable enzymes.
                </p>
              </div>
            </div>

            {/* Card 2: Psychrophiles */}
            <div className="overflow-hidden border border-border rounded-3xl bg-card flex flex-col items-start">
              <div className="w-full aspect-square overflow-hidden border-b border-border">
                <img src="/psychrophile.png" alt="Psychrophile" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-medium mb-3">Psychrophiles</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Living in Antarctic ice by producing natural antifreeze proteins that prevent cellular freezing.
                </p>
              </div>
            </div>

            {/* Card 3: Halophiles */}
            <div className="overflow-hidden border border-border rounded-3xl bg-card flex flex-col items-start">
              <div className="w-full aspect-square overflow-hidden border-b border-border">
                <img src="/halophile.png" alt="Halophile" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-medium mb-3">Halophiles</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thriving in hypersaline lagoons and salt flats through advanced osmotic pressure regulation.
                </p>
              </div>
            </div>

            {/* Card 4: Radiophiles */}
            <div className="overflow-hidden border border-border rounded-3xl bg-card flex flex-col items-start">
              <div className="w-full aspect-square overflow-hidden border-b border-border">
                <img src="/radiophile.png" alt="Radiophile" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-medium mb-3">Radiophiles</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Surviving extreme radiation levels via rapid-response DNA repair pathways.
                </p>
              </div>
            </div>

          </div>
        </section>
        {/* 2. THE BIOLOGICAL LIBRARY */}
        <section id="biobank" className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-serif mb-8">The Biological Library</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Fundación Biociencia maintains one of the world's most singular collections of extremophiles. Our living library contains over **400 microorganisms** isolated from the most hostile environments on Earth, many of which are completely new to science and unregistered elsewhere.
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
                {/* Swapped Unsplash for your microscope.jpg */}
                <div 
                  className="absolute inset-0 bg-[url('/microscope.jpg')] bg-cover bg-center" 
                />
              </div>
            </div>
          </div>
        </section>
        {/* ==================================================
            {/* ==================================================
                SECTION: WHO WE ARE & LABORATORY INFRASTRUCTURE
                ================================================== */}
          {/* ==================================================
              SECTION 01: PIONEERING & ASTROBIOLOGY
              ================================================== */}
          <section id="pioneering" className="py-24 bg-background border-t border-border">
            <div className="container mx-auto px-6 md:px-12">

              {/* Part A: Who We Are */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center mb-24">
                <div className="w-full flex items-center justify-center">
                  <img 
                    src="/climbing.jpg" 
                    alt="Field Research Expedition" 
                    className="w-full h-auto max-h-[65vh] object-contain shadow-md border border-border"
                  />
                </div>

                {/* Synchronized pt-8 to match the bottom section's spacing */}
                <div className="pt-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest mb-6">
                    Who We Are
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif mb-6">Pioneering Life Science</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Founded in 2001 by <strong>Dr. Jenny Blamey</strong> and <strong>Olivier Rickmers</strong>, we are a Chilean non-profit dedicated to unlocking the secrets of extremophiles. Our mission is to explore how these incredible organisms and their unique natural compounds can drive real-world innovation in green industry and biotechnology.
                  </p>

                  <div className="space-y-6 border-t border-border pt-8">
                    <div className="pl-6 border-l-2 border-primary/40">
                      <h4 className="font-serif text-xl mb-3 tracking-tight">A Legacy of Discovery</h4>
                      <p className="text-md text-muted-foreground leading-relaxed">
                        For over two decades, our team has ventured into Earth’s most extreme frontiers to bridge the gap between basic science and industrial application.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part B: The Search for Life (Astrobiology) */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center border-t border-border pt-24 pb-12">
                <div className="w-full flex items-center justify-center">
                  <img 
                    src="/geyser.jpg" 
                    alt="Extreme Environments Analogue Geyser" 
                    className="w-full h-auto max-h-[60vh] object-contain shadow-md border border-border"
                  />
                </div>

                {/* Increased to pt-8 to perfectly match Part A */}
                <div className="pt-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest mb-6">
                    Astrobiology
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif mb-6">The Search for Life</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Finding extremophiles on Earth fuels our search for life beyond our planet. If microbes can survive in Earth's most hostile places, they inspire us to redefine what we consider "habitable" in the cosmos.
                  </p>

                  <div className="space-y-6 border-t border-border pt-8">
                    <div className="grid grid-cols-1 gap-8">
                      <div className="pl-6 border-l-2 border-primary/40">
                        <h4 className="font-serif text-lg mb-2 tracking-tight">Planetary Exploration</h4>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          Investigating if life could exist in the sulfur-rich springs of Mars or within the sub-surface frozen oceans of Jupiter's moon, Europa.
                        </p>
                      </div>

                      <div className="pl-6 border-l-2 border-primary/40">
                        <h4 className="font-serif text-xl mb-2 tracking-tight">Smarter Space Missions</h4>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          Utilizing extremophilic research to design next-generation planetary missions and establish biological signatures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==================================================
              SECTION 02: RESEARCH & SOLUTIONS (Edge-to-Edge Fix)
              ================================================== */}
          <section id="research" className="py-24 bg-muted/30 border-t border-border w-full">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-3xl mb-16">
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Research & Solutions</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our work bridges the gap between biological resilience and industrial application. We leverage deep exploration of extremophilic microorganisms and biochemical characterization to discover high-impact solutions for the global biotechnology market.
                </p>
              </div>

              {/* Photo Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    title: "Biocorrosion Defense", 
                    desc: "Developing sustainable solutions to detect and prevent microbially influenced corrosion (MIC) in critical industrial infrastructure.",
                    image: "/biocorrosion.jpg"
                  },
                  { 
                    title: "Green Synthesis", 
                    desc: "Utilizing extremophilic microorganisms as eco-friendly alternatives for the synthesis of ferromagnetic nanoparticles.",
                    image: "/synthesis.jpg"
                  },
                  { 
                    title: "Strategic Consultancy", 
                    desc: "Advising government and private sectors on applied biotechnology management and large-scale cultivation protocols.",
                    image: "/consultancy.jpg"
                  }
                ].map((theme, i) => (
                  <div key={i} className="overflow-hidden border border-border bg-card flex flex-col">
                    <div className="w-full aspect-video overflow-hidden border-b border-border">
                      <img 
                        src={theme.image} 
                        alt={theme.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-8">
                      <h3 className="text-xl font-serif mb-4 text-foreground">
                        {theme.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {theme.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ==================================================
              SECTION 03: SPECIALIZED INFRASTRUCTURE
              ================================================== */}
          <section id="infrastructure" className="py-24 bg-background border-t border-border">
            <div className="container mx-auto px-6 md:px-12">
              <div className="mb-12">
                <h3 className="text-3xl font-serif mb-4 text-foreground">Specialized Infrastructure</h3>
                <p className="text-lg text-muted-foreground">State-of-the-art facilities dedicated to microbial discovery and scaling.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                {[
                  { title: "Molecular Biology", text: "Focused on the genetic and functional study of bacteria and archaea for applied biotechnology." },
                  { title: "Protein Lab", text: "Extracting and testing unique proteins to find tools for medicine, industry, and environmental science." },
                  { title: "Microscopy", text: "Morphological characterization of microbes using optical and fluorescence microscopy to observe growth patterns." },
                  { title: "Sterile Room", text: "High-purity environment with HEPA filtration and positive pressure for contamination-free procedures." },
                  { title: "Microbiology", text: "Creating custom culture media to grow microbes that thrive in heat, crushing pressure, or toxic environments." },
                  { title: "Scaling Lab", text: "Teaching host organisms to mass-produce resilient enzymes for durable industrial applications." },
                  { title: "Cold Chamber", text: "Dedicated storage for environmental samples collected during expeditions to preserve their biological integrity." },
                  { title: "Bioinformatics", text: "Using computational simulations to study DNA and proteins, designing solutions for energy and agriculture." }
                ].map((lab, i) => (
                  <div key={i} className="group">
                    <div className="w-10 h-[1px] bg-primary/30 mb-4 group-hover:w-full transition-all duration-500" />
                    <h4 className="font-serif text-xl mb-3 text-foreground/90">{lab.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{lab.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ==================================================
               SECTION: SERVICES & RESEARCH LINES
               ================================================== */}
          <section id="services" className="py-24 bg-muted/30 border-t border-border">
            <div className="container mx-auto px-6 md:px-12">

              {/* Part A: Services (The Business Side) */}
              <div className="mb-24">
                <div className="max-w-2xl mb-12">
                  <h2 className="text-4xl font-serif mb-4">Our Services</h2>
                  <p className="text-muted-foreground">
                    We turn resilient science into practical and effective solutions for your company.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { 
                      title: "Functional Discovery", 
                      text: "Specialized enzymes for biodegradation and reactions in difficult conditions.",
                      img: "/functional.jpg" 
                    },
                    { 
                      title: "Green Biosynthesis", 
                      text: "Toxic-free synthesis of metal nanoparticles for medical and electronic use.",
                      img: "/bichos06.jpg" 
                    },
                    { 
                      title: "Tech Transfer", 
                      text: "Licensing and custom solutions to accelerate projects and reduce industrial costs.",
                      img: "/chromatography.jpg" 
                    }
                  ].map((service, i) => (
                    <div key={i} className="overflow-hidden bg-background border border-border shadow-sm">
                      {/* Image Container */}
                      <div className="h-64 overflow-hidden bg-muted">
                        <img 
                          src={service.img} 
                          alt={service.title} 
                          className={`w-full h-full object-cover ${
                            i === 0 ? "object-bottom" : "object-center"
                          }`}
                        />
                      </div>

                      {/* Content Container */}
                      <div className="p-8">
                        <div className="mb-3">
                          <h4 className="font-serif text-xl">{service.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Part B: Research Lines (The Scientific Side) */}
              <div className="pt-16 border-t border-border">
                <div className="mb-12">
                  <h3 className="text-2xl font-serif mb-2">Lines of Investigation</h3>
                  <p className="text-muted-foreground">Innovating, restoring, and exploring our world—and beyond.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {[
                    { title: "Bioremediation", desc: "Using resilient microbes to naturally clean pollution and restore ecosystems." },
                    { title: "Extreme Biocatalysis", desc: "Eco-friendly chemical processes enabled by enzymes that thrive in harsh conditions." },
                    { title: "Astrobiology", desc: "Understanding the potential for life on other planets by studying Earth's extremes." },
                    { title: "Scaling", desc: "Translating lab discoveries into efficient, large-scale sustainable solutions." },
                    { title: "Nanoparticles", desc: "Microscopic alchemists crafting solutions for medical and environmental health." },
                    { title: "Bioinformatics", desc: "Deciphering DNA and digital tools to solve puzzles in evolution and medicine." }
                  ].map((line, i) => (
                    <div key={i} className="flex flex-col">
                      <h4 className="font-serif text-lg mb-2 text-primary">{line.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{line.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

                {/* Updated Leadership Section */}
                <section id="leadership" className="py-24">
                  <div className="container mx-auto px-6 md:px-12">
                    <h2 className="text-4xl font-serif mb-12">Leadership</h2>
                    <div className="mb-16">
                      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-start">
                        <div className="aspect-[3/4] bg-muted border border-border">
                          {/* The container below no longer has grayscale classes */}
                          <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border">
                            <img 
                              src="https://www.inach.cl/wp-content/uploads/2026/04/ECA62_EAE26_hdiaz_marzo2026_DSC02751-1024x683.jpg" 
                              alt="Dr. Jenny Blamey" 
                              className="object-cover w-full h-full"
                            />
                          </div>
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
                  <div className="text-3xl font-serif text-primary mb-2">400+</div>
                  <div className="text-sm font-mono text-muted-foreground uppercase tracking-tighter">Exclusive Microorganisms</div>
                </div>
                <div className="p-6 border border-border bg-muted/20 flex flex-col justify-center">
                  <div className="text-3xl font-serif text-primary mb-2">100+</div>
                  <div className="text-sm font-mono text-muted-foreground uppercase tracking-tighter">Scientific Publications</div>
                </div>
                <div className="p-6 border border-border bg-muted/20 flex flex-col justify-center">
                  <div className="text-3xl font-serif text-primary mb-2 text-balance">20+ Years</div>
                  <div className="text-sm font-mono text-muted-foreground uppercase tracking-tighter">Antarctic Expeditions</div>
                </div>
                <div className="p-6 border border-border bg-muted/20 flex flex-col justify-center">
                  <div className="text-3xl font-serif text-primary mb-2 text-balance">1st</div>
                  <div className="text-sm font-mono text-muted-foreground uppercase tracking-tighter">Chilean ISS Mission</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================================================
            SECTION: Legacy, ALUMNI & Selected Publications
            ================================================== */}
        <section id="legacy" className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-6 md:px-12">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

              {/* Column 1: The Commitment & Success Metrics (RE-ADDED) */}
              <div className="lg:col-span-1">
                <h2 className="text-4xl font-serif mb-6">Our Legacy</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We are dedicated to training the next generation of scientists. Beyond the lab, our impact is measured by the global reach of our alumni.
                </p>

                <div className="space-y-4">
                  <h4 className="text-sm uppercase tracking-widest font-mono text-primary">Alumni Placements</h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex justify-between border-b border-border pb-1"><span>The University of Georgia</span> <span className="text-foreground/50">USA</span></li>
                    <li className="flex justify-between border-b border-border pb-1"><span>Montana State University</span> <span className="text-foreground/50">USA</span></li>
                    <li className="flex justify-between border-b border-border pb-1">
                      <span>Université Grenoble-Alpes</span> <span className="text-foreground/50">FRANCE</span></li>
                          <li className="flex justify-between border-b border-border pb-1"><span>Max Planck</span> <span className="text-foreground/50">GERMANY</span></li>
                    <li className="flex justify-between border-b border-border pb-1"><span>USACH</span> <span className="text-foreground/50">CHILE</span></li>
                    <li className="flex justify-between border-b border-border pb-1"><span>EPFL</span> <span className="text-foreground/50">SWITZERLAND</span></li>

                  </ul>
                </div>
              </div>

              {/* Column 2 & 3: Testimonials Grid with Large Square Photos */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Antonia González", role: "Biotechnology Engineering", image: "/antonia.jpg", text: "It is transformative to witness the difference between theoretical knowledge and real-world application." },
                  { name: "Gabriel Leiva", role: "MSc in Biochemistry", image: "/gaboku.jpg", text: "The foundation allowed me to grow as a scientist, providing the freedom to work on my own ideas." },
                  { name: "Hardy Guzmán", role: "PhD Candidate", image: "/hardy.jpg", text: "The multidisciplinary environment has allowed me to deepen my knowledge in minimalist enzymes." },
                  { name: "Mónica Acuña", role: "PhD in Microbiology", image: "/monique.jpg", text: "Working here strengthened my skills in proteomic analysis and biotechnology." }
                ].map((test, i) => (
                  <div key={i} className="p-8 bg-muted/20 border border-border flex items-center gap-8 h-48">

                    {/* Square Photo - Sized for equal margin top/left/bottom */}
                    <div className="w-32 h-32 shrink-0 overflow-hidden border border-border shadow-sm bg-background">
                      <img 
                        src={test.image} 
                        alt={test.name} 
                        style={{ filter: 'grayscale(100%)' }}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center h-full py-2">
                      <p className="text-xs italic text-muted-foreground mb-4 line-clamp-4 leading-relaxed">
                        "{test.text}"
                      </p>
                      <div className="mt-auto">
                        <p className="font-serif text-sm text-foreground mb-0.5">{test.name}</p>
                        <p className="text-xs uppercase tracking-widest text-primary font-mono">{test.role}</p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

          {/* Publications */}
          <section id="publications" className="py-24 bg-card border-y border-border">
            <div className="container mx-auto px-6 md:px-12">
              <div className="flex items-end justify-between mb-12">
                <h2 className="text-4xl font-serif">Selected Publications</h2>
                <a 
                  href="https://scholar.google.com/citations?user=bXcdEp4AAAAJ&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-medium text-primary hover:underline hidden md:flex items-center gap-1"
                >
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
                    <div className="text-sm font-mono text-primary/80 uppercase tracking-wide">{pub.venue}</div>
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


          {/* ==================================================
              MEDIA & GLOBAL IMPACT
              ================================================== */}
          <section id="media" className="py-24 bg-card border-y border-border">
            <div className="container mx-auto px-6 md:px-12">
              <div className="flex items-end justify-between mb-12">
                <h2 className="text-4xl font-serif">Media & Global Impact</h2>
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest hidden md:block">Active Missions & Press</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                <div className="lg:col-span-2 flex flex-col gap-8">

                  {/* Project POLARIS */}
                  <div className="group relative overflow-hidden border border-border bg-background flex flex-row hover:border-primary/30 transition-all max-h-[300px]">
                    <div className="w-[140px] md:w-1/3 shrink-0 border-r border-border overflow-hidden">
                      <img 
                        src="/polaris.png" 
                        alt="Project POLARIS" 
                        className="w-full h-full object-cover grayscale-0"
                      />
                    </div>

                    <div className="flex-1 p-5 md:p-8 flex flex-col justify-start overflow-hidden">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-mono uppercase tracking-tighter shrink-0">Live Mission</span>
                        <span className="text-[10px] md:text-sm font-mono text-muted-foreground uppercase truncate">ISS Launch May 2026</span>
                      </div>
                      <h3 className="text-lg md:text-2xl font-serif mb-2 leading-tight">Project POLARIS: Chilean Microbes in Orbit</h3>
                      <p className="text-muted-foreground leading-relaxed text-xs md:text-sm line-clamp-2 md:line-clamp-3">
                        Leading the first Chilean mission to the International Space Station to study extremophile resilience in microgravity, in collaboration with NASA.
                      </p>
                      <a href="https://www.youtube.com/watch?v=1_s7f2jj3K8" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-primary font-mono text-xs md:text-sm">
                        Watch Mission Interview <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Documentary Section */}
                  <div className="group relative overflow-hidden border border-border bg-background flex flex-row hover:border-primary/30 transition-all max-h-[300px]">
                    <div className="w-[140px] md:w-1/3 shrink-0 border-r border-border overflow-hidden">
                      <img 
                        src="/docu.png" 
                        alt="Enzymes Documentary" 
                        className="w-full h-full object-cover grayscale-0"
                      />
                    </div>

                    <div className="flex-1 p-5 md:p-8 flex flex-col justify-start overflow-hidden">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-mono uppercase tracking-tighter shrink-0">Documentary Feature</span>
                      </div>
                      <h3 className="text-lg md:text-2xl font-serif mb-2 leading-tight">Enzymes at the End of the World</h3>
                      <p className="text-muted-foreground leading-relaxed text-xs md:text-sm line-clamp-2 md:line-clamp-3">
                        A deep-dive into the foundation's bioprospecting expeditions across the Atacama Desert and the Antarctic Peninsula.
                      </p>
                      <a href="https://youtu.be/GdnF03gqjSo?si=BLrlKmBzKXb21nnH" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-primary font-mono text-xs md:text-sm">
                        View Field Research <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* PRESS FEED - FIXED ALIGNMENT */}
                <div className="flex flex-col gap-4 h-full">
                  {[
                    { source: "Scientific American", title: "Antarctic Microbes Live Life to the Extreme", link: "https://www.scientificamerican.com/article/antarctic-microbes-live-extreme/" },
                    { source: "NASA / USACH", title: "Historic Mission: Chilean Microbes Bound for the ISS", link: "https://www.usach.cl/news/investigadora-lidera-historica-mision-chilena-microorganismos-extremofilos-espacio" },
                    { source: "The Clinic", title: "Expanding Biology to Space: The Blamey Interview", link: "https://www.theclinic.cl/2026/04/09/jenny-blamey-investigadora-antartica-que-llevara-microorganismos-al-espacio-las-condiciones-son-similares-en-terminos-de-temperaturas/" },
                    { source: "El Mostrador", title: "Biotechnology Innovation: From Chile to the Global Market", link: "https://www.elmostrador.cl/cultura/ciencia-cultura/2024/11/07/investigadora-chilena-lidera-estudio-pionero-que-enviara-microorganismos-al-espacio-exterior/" },
                    { source: "Reuters", title: "From the Antarctic to the ISS: Chilean Extremophiles Head to Orbit", link: "https://www.reuters.com/video/watch/idRW445222042026RP1/" }
                  ].map((news, i) => (
                    <a 
                      key={i} 
                      href={news.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex flex-col justify-center p-5 border border-border bg-background hover:border-primary/40 hover:bg-muted/30 transition-all group"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm font-mono text-primary uppercase tracking-widest">{news.source}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="text-sm font-serif group-hover:text-primary transition-colors leading-tight">{news.title}</h4>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* ==================================================
              STRATEGIC COLLABORATORS (Single Row & Reordered)
              ================================================== */}
          <section className="py-20 bg-background border-t border-border">
            <div className="container mx-auto px-6 md:px-12">
              <div className="flex flex-col items-center">
                <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground mb-16 text-center">
                  Strategic Collaborators & Partners
                </h3>

                {/* Row 1: Academic & Regional Partners */}
                {/* FIXED: grayscale-0 for mobile (color), md:grayscale for desktop (gray) */}
                <div className="w-full flex flex-row flex-wrap justify-center items-center gap-x-12 md:gap-x-20 gap-y-12 mb-20 opacity-60 grayscale-0 md:grayscale hover:grayscale-0  transition-all duration-700">
                  <img src="/logo-uchile.png" alt="Universidad de Chile" className="h-20 md:h-28 w-auto object-contain" />
                  <img src="/logo-usach.svg" alt="USACH" className="h-12 md:h-18 w-auto object-contain" />
                  <img src="/logo-inach.svg" alt="INACH" className="h-12 md:h-18 w-auto object-contain" />
                  <img src="/logo-academia.png" alt="Academia de Biotecnología Agrícola" className="h-14 md:h-20 w-auto object-contain" />
                  <img src="/logo-swissaustral.svg" alt="Swissaustral" className="h-11 md:h-16 w-auto object-contain" />
                </div>

                {/* Row 2: International & Space Agencies */}
                {/* FIXED: grayscale-0 for mobile (color), md:grayscale for desktop (gray) */}
                <div className="w-full flex flex-row flex-wrap justify-center items-center gap-x-16 md:gap-x-24 gap-y-12 opacity-60 grayscale-0 md:grayscale hover:grayscale-0  transition-all duration-700">
                  <img src="/uga-logo.png" alt="University of Georgia" className="h-16 md:h-22 w-auto object-contain" />
                  <img src="/logo-nasa.svg" alt="NASA" className="h-24 md:h-32 w-auto object-contain" />
                  <img src="/logo-afosr.png" alt="AFOSR" className="h-24 md:h-32 w-auto object-contain" />
                  <img src="/logo-spacex.svg" alt="SpaceX" className="h-6 md:h-9 w-auto object-contain" />
                </div>
              </div>
            </div>
          </section>
          
        {/* News & Contact Grid */}
        <section id="news" className="py-24 bg-card border-t border-border">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

            

            {/* Recent Milestone / News / Scientific Ledger */}
            <div>
              <h2 className="text-4xl font-serif mb-8">Recent Milestones</h2>
              <div className="space-y-8">
                {[
                  { 
                    date: "MAY 2026", 
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
                  <div key={i} className="flex gap-6 items-start">
                    <div className="font-mono text-xs text-primary w-16 shrink-0 pt-1 tracking-widest">{item.date}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div id="contact">
              <h2 className="text-4xl font-serif mb-8">Contact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 text-base">
                <div>
                  <a 
                    href="https://maps.app.goo.gl/HaF4mXAEEsRsHoXy9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex flex-col hover:opacity-80 transition-opacity"
                  >
                    <div className="font-mono text-sm text-muted-foreground mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                      <MapPin className="w-3 h-3"/> 
                      <span className="border-b border-transparent group-hover:border-primary">Location</span>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      Fundacion Biociencia<br/>
                      Jose Domingo Cañas 2280<br/>
                      Nunoa 7750131<br/>
                      Santiago, CHILE
                    </p>
                  </a>
                </div>
                <div>
                  <div className="font-mono text-sm text-muted-foreground mb-2 flex items-center gap-2">
                    <Mail className="w-3 h-3"/> Email
                  </div>
                  <p className="text-foreground mb-4">
                    <a href="mailto:contacto@bioscience.cl" className="hover:text-primary transition-colors font-medium">contacto@bioscience.cl</a>
                  </p>

                  <div className="font-mono text-sm text-muted-foreground mb-2 flex items-center gap-2">
                    <Phone className="w-3 h-3"/> Phone
                  </div>
                  <p className="text-foreground mb-6 font-medium">
                    +56 2 2343 2578
                  </p>

                  <div className="flex gap-5 items-end">
                    <a 
                      href="https://www.linkedin.com/company/fundaci%C3%B3n-biociencia/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5 block" />
                    </a>
                    <a 
                      href="https://www.instagram.com/fundacion.biociencia/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <img src="/instagram.png" alt="Instagram" className="w-5 h-5 block" />
                    </a>
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