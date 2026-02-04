import CallButton from "../components/CallButton";

export default function Services() {
  return (
    <>
      {/* Floating Call Button */}
      <CallButton />

      {/* PAGE INTRO */}
      <section className="hero" style={{ padding: "60px 20px" }}>
        <div className="hero-content">
          <h1>
            Our Packing & Moving Services
            <span>Reliable • Safe • Professional</span>
          </h1>

          <p className="hero-sub">
            Shree Siddhi Home Packers & Movers provides complete relocation
            solutions backed by <strong>28+ years of experience</strong>.
          </p>

          <div className="hero-cta">
            <a href="tel:+919930907576">
              📞 Call Now: <strong>+91 99309 07576</strong>
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="page">
        {/* SERVICES GRID */}
        <section>
          <h2>Our Professional Services</h2>

          <div className="service-list">
            <div className="service-card">
              <h3>🏠 Household Shifting</h3>
              <p>
                End-to-end household relocation including packing, loading,
                transportation, unloading, and unpacking with complete care.
              </p>
              <a href="tel:+919930907576">📞 Enquire Now</a>
            </div>

            <div className="service-card">
              <h3>🏢 Office Relocation</h3>
              <p>
                Professional office shifting services with minimal downtime and
                careful handling of furniture, systems, and documents.
              </p>
              <a href="tel:+919930907576">📞 Enquire Now</a>
            </div>

            <div className="service-card">
              <h3>🚚 Local & Outstation Shifting</h3>
              <p>
                Reliable local shifting within Mumbai and secure intercity
                shifting across India with planned execution.
              </p>
              <a href="tel:+919930907576">📞 Enquire Now</a>
            </div>

            <div className="service-card">
              <h3>🚗 Car Transportation</h3>
              <p>
                Safe and damage-free car transportation using specially designed
                carriers and experienced professionals.
              </p>
              <a href="tel:+919930907576">📞 Enquire Now</a>
            </div>

            <div className="service-card">
              <h3>🏍️ Bike Transportation</h3>
              <p>
                Secure two-wheeler transportation with proper packing, handling,
                and timely delivery.
              </p>
              <a href="tel:+919930907576">📞 Enquire Now</a>
            </div>

            <div className="service-card">
              <h3>📦 Packing, Unpacking & Insurance</h3>
              <p>
                High-quality packing materials and optional insurance coverage
                for complete peace of mind.
              </p>
              <a href="tel:+919930907576">📞 Enquire Now</a>
            </div>
          </div>
        </section>

        {/* TRUST CTA */}
        <section className="cta-box">
          <h2>Why Trust Shree Siddhi Home Packers & Movers?</h2>
          <p>
            With over <strong>28+ years</strong> of experience, trained staff,
            and thousands of successful relocations, we ensure stress-free
            shifting every time.
          </p>
          <a href="tel:+919930907576">📞 Call Now – 24×7</a>
        </section>
      </main>
    </>
  );
}
