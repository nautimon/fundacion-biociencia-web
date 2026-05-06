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
            Fundación Biociencia
          </div>
          <nav className="hidden md:flex items-center gap-10">
            {[
              { name: "Collection", href: "#library" },
              { name: "Research", href: "#research" },
              { name: "Publications", href: "#publications" },
              { name: "Legacy", href: "#impact" },
              { name: "Leadership", href: "#leadership" },
              { name: "Media", href: "#media" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[13px] font-medium tracking-wide text-foreground/70 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
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

              {/* Updated Image Block */}
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden bg-muted border border-border">
                <img 
                  src="/climbing.jpg" 
                  alt="Research expedition climbing in the Atacama" 
                  className="object-cover w-full h-full mix-blend-multiply opacity-90"
                />
                <div className="absolute inset-0 border border-border/50 z-10 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 1. HERO SECTION ENDS HERE */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-light tracking-tight">The Superpowers of Life</h2>
            <p className="text-xl text-muted-foreground mt-4">How extremophiles survive where nothing else can.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1: Thermophiles */}
            <div className="overflow-hidden border border-border rounded-3xl bg-card flex flex-col items-start transition-all hover:shadow-lg">
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
            <div className="overflow-hidden border border-border rounded-3xl bg-card flex flex-col items-start transition-all hover:shadow-lg">
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
            <div className="overflow-hidden border border-border rounded-3xl bg-card flex flex-col items-start transition-all hover:shadow-lg">
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
            <div className="overflow-hidden border border-border rounded-3xl bg-card flex flex-col items-start transition-all hover:shadow-lg">
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
        <section id="what-we-do" className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-6 md:px-12">

            {/* Part A: Who We Are & The Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
              <div className="flex gap-4 items-center">
                {/* Left Image: Realigned to show subject */}
                <div className="w-1/2 aspect-[3/4] overflow-hidden border border-border shadow-sm">
                  <img 
                    src="/climbing.jpg" 
                    alt="Field Research Expedition" 
                    className="object-cover object-left w-full h-full"
                  />
                </div>
                {/* Right Image: Staggered effect */}
                <div className="w-1/2 aspect-[3/4] overflow-hidden border border-border shadow-sm mt-12">
                  <img 
                    src="/geyser.jpg" 
                    alt="Extreme Environments Research" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="pt-4">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-mono uppercase tracking-widest mb-6">
                  Who We Are
                </div>
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Pioneering Life Science</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Founded in 2001 by <strong>Dr. Jenny Blamey</strong> and <strong>Olivier Rickmers</strong>, we are a Chilean non-profit dedicated to unlocking the secrets of extremophiles. Our mission is to explore how these incredible organisms and their unique natural compounds can drive real-world innovation in green industry and biotechnology.
                </p>

                <div className="space-y-6 border-t border-border pt-8">
                  <div>
                    <h4 className="font-serif text-lg mb-2">Astrobiology & Beyond</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Studying extremophiles helps us redefine "habitability" and design smarter space missions to search for signs of life on Mars or the moons of Jupiter.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Part B: Specialized Laboratories Grid */}
            <div className="pt-16 border-t border-border">
              <div className="mb-12">
                <h3 className="text-2xl font-serif mb-2 text-foreground">Specialized Infrastructure</h3>
                <p className="text-muted-foreground">State-of-the-art facilities dedicated to microbial discovery and scaling.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                {[
                  { 
                    title: "Molecular Biology", 
                    text: "Focused on the genetic and functional study of bacteria and archaea for applied biotechnology." 
                  },
                  { 
                    title: "Protein Lab", 
                    text: "Extracting and testing unique proteins to find tools for medicine, industry, and environmental science." 
                  },
                  { 
                    title: "Microscopy", 
                    text: "Morphological characterization of microbes using optical and fluorescence microscopy to observe growth patterns." 
                  },
                  { 
                    title: "Sterile Room", 
                    text: "High-purity environment with HEPA filtration and positive pressure for contamination-free procedures." 
                  },
                  { 
                    title: "Microbiology", 
                    text: "Creating custom culture media to grow microbes that thrive in heat, crushing pressure, or toxic environments." 
                  },
                  { 
                    title: "Scaling Lab", 
                    text: "Teaching host organisms to mass-produce resilient enzymes for durable industrial applications." 
                  },
                  { 
                    title: "Cold Chamber", 
                    text: "Dedicated storage for environmental samples collected during expeditions to preserve their biological integrity." 
                  },
                  { 
                    title: "Bioinformatics", 
                    text: "Using computational simulations to study DNA and proteins, designing solutions for energy and agriculture." 
                  }
                ].map((lab, i) => (
                  <div key={i} className="group">
                    <div className="w-10 h-[1px] bg-primary/30 mb-4 group-hover:w-full transition-all duration-500" />
                    <h4 className="font-serif text-xl mb-3 text-foreground/90">{lab.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{lab.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ==================================================
           SECTION: SERVICES & RESEARCH LINES
           ================================================== */}
        <section id="services-research" className="py-24 bg-muted/30 border-t border-border">
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
                    text: "Specialized enzymes for biodegradation and reactions in difficult conditions." 
                  },
                  { 
                    title: "Green Biosynthesis", 
                    text: "Toxic-free synthesis of metal nanoparticles for medical and electronic use." 
                  },
                  { 
                    title: "Tech Transfer", 
                    text: "Licensing and custom solutions to accelerate projects and reduce industrial costs." 
                  }
                ].map((service, i) => (
                  <div key={i} className="p-8 bg-background border border-border shadow-sm">
                    <h4 className="font-serif text-xl mb-3">{service.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.text}</p>
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
        {/* ==================================================
            SECTION: IMPACT, ALUMNI & EDUCATION
            ================================================== */}
        <section id="impact" className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-6 md:px-12">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

              {/* Column 1: The Commitment & Success Metrics (RE-ADDED) */}
              <div className="lg:col-span-1">
                <h2 className="text-4xl font-serif mb-6">Our Legacy</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We are dedicated to training the next generation of scientists. Beyond the lab, our impact is measured by the global reach of our alumni.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-primary">Alumni Placements</h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex justify-between border-b border-border pb-1"><span>Harvard University</span> <span className="text-foreground/50">USA</span></li>
                    <li className="flex justify-between border-b border-border pb-1"><span>MIT</span> <span className="text-foreground/50">USA</span></li>
                    <li className="flex justify-between border-b border-border pb-1"><span>Max Planck Institute</span> <span className="text-foreground/50">GER</span></li>
                    <li className="flex justify-between border-b border-border pb-1"><span>University of Georgia</span> <span className="text-foreground/50">USA</span></li>
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
                      <p className="text-[11px] italic text-muted-foreground mb-4 line-clamp-4 leading-relaxed">
                        "{test.text}"
                      </p>
                      <div className="mt-auto">
                        <p className="font-serif text-sm text-foreground mb-0.5">{test.name}</p>
                        <p className="text-[9px] uppercase tracking-widest text-primary font-mono">{test.role}</p>
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
        source: "Reuters", 
        title: "From the Antarctic to the ISS: Chilean Extremophiles Head to Orbit", 
        link: "https://www.reuters.com/video/watch/idRW445222042026RP1/" 
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