import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowDown, Github, Linkedin, Instagram, Mail, Plus, Minus, MapPin, Menu, X, Utensils, Globe } from 'lucide-react';
import './styles.css';

const links = { linkedin: 'https://www.linkedin.com/in/prothit/', github: 'https://github.com/prorick', instagram: 'https://www.instagram.com/prothit.halder/', yelp: 'https://www.yelp.com/user_details?userid=3z1Aaq_WhhHonhwyoAsuFw', email: 'mailto:prorick2001@gmail.com' };
function External({ href, children, className = '', ...rest }) { return <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>{children}</a>; }
const roles = [
  {
    "company": "PayPal",
    "role": "Software Engineer II",
    "team": "Pricing Engineering · Austin, TX",
    "dates": "Feb 2023 – Aug 2026",
    "bullets": [
      "Architected and owned the end-to-end delivery of PricingHub, an external merchant-facing portal built in React enabling targeted offer opt-ins; coordinated API and product dependencies, and drove 200+ opt-ins in the first 24 hours with zero marketing spend.",
      "Owned the PricingHub rollout strategy: gated launch to ~100K US merchant accounts, expanded market by market as localization and compliance cleared, and reached general availability for 6M+ merchants (60x) with zero P0/P1 incidents.",
      "Defined and shipped A/B price testing for Subscriptions, a new merchant pricing capability, to measure willingness to pay when adoption lagged; built the product’s frontend 0-to-1 using React.",
      "Created an internal AI-assisted tool (Claude skills + automation scripts) to format localized terms & conditions from Word docs, cutting localization ticket prep time by 50% and reducing manual errors.",
      "Contributed to an internal Pricing Agent by integrating the PayPal Offers API into MCP tools; enabled audit-trail queries using merchant ID + offer code, reducing investigation time by ~25%."
    ]
  },
  {
    "company": "PayPal",
    "role": "Software Engineer Intern",
    "team": "San Jose, CA",
    "dates": "Jun 2022 – Sep 2022",
    "bullets": [
      "Improved the Pricing Team’s contract creation workflow by integrating time zone selection and automatic conversions across API and Full Stack systems, resulting in a more efficient, error-free workflow using React and Java."
    ]
  },
  {
    "company": "Scripps Research",
    "role": "Data Science Intern",
    "team": "San Diego, CA",
    "dates": "Sep 2021 – Jun 2022",
    "bullets": [
      "Built ML pipelines (Random Forest) on UK Biobank predictors to study genetic association signals using Python",
      "Created a program that took in timestamps from rats pressing a lever, sorted it into active/inactive presses, and calculated latency and bouts using Pandas/NumPy"
    ]
  },
  {
    "company": "ERSP",
    "paper": "https://drive.google.com/file/d/1iLRknrD76KJ-Pn6y4qeeDbny6ELD7vAy/view",
    "role": "Computer Network Researcher",
    "team": "Early Research Scholars Program · San Diego, CA",
    "dates": "Oct 2020 – Jun 2021",
    "bullets": [
      "Simulated Opera, a proposed network solution that reduces bandwidth tax and supports low-latency traffic, using NS-3, a packet-level simulator, to determine whether Opera can be scaled to larger data center networks (C++)."
    ]
  }
];
function ExperienceRow({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  return <article className={`experience-row ${open ? 'expanded' : ''}`}>
    <button className="experience-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={`role-${index}`}>
      <span className="experience-number">0{index + 1}</span><span className="role-heading"><strong>{item.company}</strong><span>{item.role}</span></span><span className="role-dates">{item.dates}</span><span className="expand-icon">{open ? <Minus size={18}/> : <Plus size={18}/>}</span>
    </button>
    <div id={`role-${index}`} hidden={!open} className="role-detail"><p className="team">{item.team}</p><ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul>{item.paper && <External href={item.paper} className="research-paper-link">Read the ERSP Poster <ArrowUpRight size={16}/></External>}</div>
  </article>;
}
function App() {
  const [menu, setMenu] = useState(false);
  return <>
    <header className="header"><a href="#home" className="wordmark" aria-label="Prothit Halder home">ph<span>↗</span></a><nav aria-label="Main navigation" className={menu ? 'nav open' : 'nav'}><a href="#about" onClick={() => setMenu(false)}>The person</a><a href="#work" onClick={() => setMenu(false)}>The work</a><a href="#off-clock" onClick={() => setMenu(false)}>Off the clock</a></nav><a className="hello-link" href={links.email}>Say hello <ArrowUpRight size={17}/></a><button className="mobile-toggle" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></header>
    <main>
      <section id="home" className="hero wrap">
        <div className="hero-copy"><div className="eyebrow"><span className="mini-line"/> PRODUCT MINDSET. ENGINEERING DEPTH.</div><h1>Prothit<br/><span className="surname">Halder<span className="accent period">.</span></span></h1><p className="hero-description">Turning customer problems<br/>into products that deliver.</p><div className="hero-meta"><span>Masters in CS at UPenn</span><span>Previously SWE at PayPal</span></div><a href="#work" className="primary-button">Explore my work <ArrowDown size={18}/></a></div>
        <div className="hero-visual"><div className="photo-top"><span>A LITTLE OUTSIDE THE ORDINARY</span><Globe size={17}/></div><img className="portrait" src={`${import.meta.env.BASE_URL}prothit-potsdam.jpg`} alt="Prothit beside the stone columns in Potsdam, Germany" fetchPriority="high"/><div className="photo-bottom"><span><MapPin size={14}/> Potsdam, Germany</span><span>01 / FIELD NOTES</span></div></div>
        <div className="hero-bottom"><span>BAY AREA <span className="city-separator">/</span> AUSTIN <span className="city-separator">/</span> SAN DIEGO <span className="city-separator">/</span> PHILADELPHIA</span> <a href="#about">SCROLL TO DISCOVER <ArrowDown size={14}/></a></div>
      </section>
      <section id="about" className="about section"><div className="wrap"><div className="section-kicker"><span>01 / THE PERSON</span><span>A WORK IN PROGRESS. IN A GOOD WAY.</span></div><div className="about-grid"><div><h2>Product ambition.<br/><span className="muted">Technical depth.</span></h2><p className="about-body">Now pursuing my master’s at Penn with a focus on AI, building on my engineering experience at PayPal: understanding customer problems, aligning teams, testing ideas, and taking products from ambiguity to launch.</p><div className="career-focus"><span className="eyebrow">WHAT I’M WORKING TOWARD</span><ul><li>Product Manager</li><li>Tech Consultant</li><li>Forward Deployed Engineer</li><li>Product Engineer</li></ul></div></div><div className="education"><span className="eyebrow">THE LEARNING NEVER STOPS</span><article><span className="school-mark"><img src={`${import.meta.env.BASE_URL}penn-shield.png`} alt="University of Pennsylvania shield" width="96" height="64" /></span><div><span className="school-dates">Aug 2026 — Dec 2027 · EXPECTED</span><h3>University of Pennsylvania</h3><p>M.S.E. Computer & Information Science<br/>Concentration in AI</p><span className="school-note">Artificial Intelligence · Software Foundations<br/>Product Design at Wharton</span></div></article><article><span className="school-mark"><img src={`${import.meta.env.BASE_URL}ucsd-logo.svg`} alt="UC San Diego logo" width="96" height="64" /></span><div><span className="school-dates">2019 — 2022</span><h3>UC San Diego</h3><p>B.S. Mathematics–Computer Science<br/>Minor in Cognitive Science</p><span className="school-note">Cum Laude · Marshall College Honors</span></div></article></div></div></div></section>
      <section id="work" className="work section wrap"><div className="section-kicker"><span>02 / THE WORK</span><span>IDEAS → REAL-WORLD IMPACT</span></div><div className="section-title"><h2>Built with intention.</h2><p>Customer problems. Cross-functional launches.<br/>Measurable product outcomes.</p></div>
        <div className="featured"><div className="featured-copy"><span className="eyebrow accent">SELECTED WORK · PAYPAL</span><h3>Small beginning.<br/>Global scale.</h3><p>Merchants needed a simpler way to access pricing offers. I helped turn that need into PricingHub, coordinated its launch across eight functions, and owned a staged rollout to 6M+ merchants.</p><div className="featured-foot"><span>PRODUCT DELIVERY + LAUNCH STRATEGY</span><a href="#experience" aria-label="Read about my PricingHub experience"><ArrowDown size={23}/></a></div></div><div className="featured-stats"><div><strong>6M<span>+</span></strong><p>merchants reached</p></div><div className="stat-pair"><div><strong>60<span>×</span></strong><p>rollout growth</p></div><div><strong>200<span>+</span></strong><p>opt-ins on day one</p></div></div><span className="stats-note">FROM 100K ACCOUNTS TO GENERAL AVAILABILITY</span></div></div>
        <div id="experience" className="experience-heading"><h3>Experience</h3><External href={links.linkedin}>The full story on LinkedIn <ArrowUpRight size={16}/></External></div><div className="experience-list">{roles.map((item, i) => <ExperienceRow item={item} index={i} key={item.role}/>)}</div>
        <div className="github-strip"><Github size={23}/><p>A few things I’ve built along the way.</p><External href={links.github}>Explore my GitHub <ArrowUpRight size={18}/></External></div>
      </section>
      <section id="off-clock" className="section wrap off-clock"><div className="section-kicker"><span>03 / OFF THE CLOCK</span><span>THERE’S MORE TO THE STORY</span></div><div className="section-title"><h2>Good places. Great taste.</h2><p>New cities, memorable meals,<br/>and a little room for spontaneity.</p></div><div className="life-grid"><External href={links.yelp} className="yelp-card"><div className="card-top"><span><Utensils size={18}/> THE FOOD FILES</span><ArrowUpRight size={24}/></div><div className="yelp-symbol" aria-hidden="true">✳</div><div><h3>My next stop?<br/>Probably food.</h3><p>The places I’ve tried. The meals worth talking about.<br/>Follow my food adventures on Yelp.</p></div><span className="card-cta">Find me on Yelp <ArrowUpRight size={18}/></span></External><External href={links.instagram} className="instagram-card"><div className="card-top"><span><Instagram size={18}/> LIFE, UNFILTERED</span><ArrowUpRight size={24}/></div><div className="destination-list"><span>Czechia</span><span>Germany</span><span>Amsterdam</span><span>Japan <span className="accent">↗</span></span></div><div className="instagram-bottom"><p>A few stamps.<br/>A lot of stories.</p><span className="card-cta">@prothit.halder <ArrowUpRight size={18}/></span></div></External></div></section>
      <footer id="contact" className="footer wrap"><div className="footer-top"><div><span className="eyebrow">GOOD THINGS START WITH A CONVERSATION</span><h2>Let’s connect<span className="accent">.</span></h2></div><a className="contact-circle" href={links.email} aria-label="Email Prothit"><ArrowUpRight size={39}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Prothit Halder</span><div><External href={links.linkedin}><Linkedin size={16}/> LinkedIn</External><External href={links.github}><Github size={16}/> GitHub</External><a href={links.email}><Mail size={16}/> Email</a></div><a href="#home">BACK TO TOP ↑</a></div></footer>
    </main>
  </>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
