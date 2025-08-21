import { useEffect } from "react";
import "../index.css";

export default function HomePage() {
  const Icon = ({ name }) => {
    const common = "icon"; 
    switch (name) {
      case "leaf": return <svg className={common} viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5S15 2 9.5 6.5 3.5 20.5 3.5 20.5 13 22 18.5 17.5 20.5 3.5 20.5 3.5zM7 17c1.5-4 6-7 11-8" /></svg>;
      case "box": return <svg className={common} viewBox="0 0 24 24" fill="currentColor"><path d="M3 7l9-4 9 4-9 4-9-4zm0 4l9 4 9-4v6l-9 4-9-4v-6z" /></svg>;
      case "truck": return <svg className={common} viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h11v7h-1.5a2.5 2.5 0 100 5 2.5 2.5 0 002.5-2.5h3a2.5 2.5 0 100-5H18V8h2l2 3v6h-2.05A3.501 3.501 0 0114.5 19 3.5 3.5 0 0111 15.5H5.05A3.5 3.5 0 111 12V8a2 2 0 012-2zm2 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>;
      case "cup": return <svg className={common} viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h12v3h2a2 2 0 010 4h-2.1A8 8 0 015 6V3zm12 7h1a1 1 0 100-2h-1v2zM6 9a6 6 0 006 6 6 6 0 006-6H6zm-1 8h14v2H5v-2z" /></svg>;
      case "fabric": return <svg className={common} viewBox="0 0 24 24" fill="currentColor"><path d="M3 5l6-3 6 3 6-3v14l-6 3-6-3-6 3V5zm6 0v10l6 3V8l-6-3z" /></svg>;
      case "pill": return <svg className={common} viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 3a5.5 5.5 0 000 11h7a5.5 5.5 0 100-11h-7zm-.5 2h8a3.5 3.5 0 110 7H8a3.5 3.5 0 110-7z" /></svg>;
      case "heart": return <svg className={common} viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.35-9.5-8.5C1 9.5 3.5 6 7 6c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.5 0 6 3.5 4.5 6.5C19.5 16.65 12 21 12 21z" /></svg>;
      default: return <svg className={common} viewBox="0 0 24 24" fill="currentColor"><path d="M4 7l8-4 8 4-8 4-8-4zm0 4l8 4 8-4v7l-8 4-8-4v-7z" /></svg>;
    }
  };

  // Intersection Observer for fade-in
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="app-container">
      {/* HERO SECTION */}
      <section className="hero-section fade-in-section">
        <img src="public/images/landing/e2622d0115226486f53ad02444ac9213213a3eb4.png" alt="Airplane" className="hero-image" />
        <div className="hero-content">
          <h1>
            East Africa’s Leading <br />
            General Sales & Service Agent
          </h1>
          <p>
            Join other airlines that partner with ADL Aviation to streamline cargo and passenger services, optimize operations, and deliver operational efficiency as a trusted General Sales & Service Agent.
          </p>
          <button className="explore-button">Explore Website</button>
        </div>
      </section>

      {/* LOGOS */}
      <section className="logos-section fade-in-section">
        <div className="logos-container">
          <div className="logo" style={{ color: "#DC2626" }}>TAM</div>
          <div className="logo" style={{ color: "#10B981" }}>Ethiopian</div>
          <div className="logo" style={{ color: "#10B981" }}>Malawi Airlines</div>
        </div>
      </section>

      {/* AREAS OF FOCUS */}
      <section className="areas-of-focus-section fade-in-section">
        <div className="content-container">
          <h2>Our Areas of Focus</h2>
          <p>Our extensive network covers across Africa, enabling seamless connectivity, efficient operations, and comprehensive service for our clients.</p>
          <div className="cards-grid">
            {[
              { icon: "leaf", title: "Fresh & Perishables", desc: "Time-critical and temperature-sensitive shipments with priority handling from origin to destination." },
              { icon: "box", title: "General Cargo", desc: "Door-to-door general cargo solutions across our network with reliable schedules and tracking." },
              { icon: "truck", title: "Courier", desc: "Expedited courier and e-commerce parcels with simplified clearance and flexible delivery options." },
              { icon: "cup", title: "Tea & Coffee", desc: "Export expertise in specialty commodities with compliance, packaging, and route optimization." },
              { icon: "fabric", title: "Textiles", desc: "Garments and fabrics moved efficiently with value-added consolidation and DC bypass." },
              { icon: "pill", title: "Pharmaceuticals", desc: "GDP-aware procedures for medical & pharma cargo: cold chain integrity and strict SOPs." },
              { icon: "heart", title: "Humanitarian", desc: "Relief cargo handling to remote and high-need areas with rapid mobilization and visibility." },
              { icon: "parcel", title: "Special Projects", desc: "Oversized/odd cargo planning, charters, and turnkey solutions for complex moves." },
            ].map(c => (
              <div key={c.title} className="card">
                <span className="icon-container"><Icon name={c.icon} /></span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section fade-in-section">
        <div className="content-container">
          <h2>Sign up for our newsletter</h2>
          <p>Subscribe to receive our latest news and updates.</p>
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              alert(`Subscribed: ${email}`);
              e.target.reset();
            }}
          >
            <input type="email" name="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>



      <h1 className="text-3xl font-bold text-red-500">Hello Tailwind</h1>


      {/* FOOTER */}
      <footer className="fade-in-section">
        © {new Date().getFullYear()} ADL Aviation — All rights reserved.
      </footer>
    </div>
  );
}
