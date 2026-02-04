import CallButton from "../components/CallButton";

export default function Home() {
  return (
    <>
      {/* Floating Call Button */}
      <CallButton />

      {/* HERO SECTION */}
      <section className="hero hero-center">
        <div className="hero-content hero-box">
          <h1 className="brand-title">
            Shree Siddhi Home Packers & Movers
          </h1>

          <h2 className="experience">
            28+ Years of Trusted Relocation Experience
          </h2>

          <p className="hero-sub">
            Local & Outstation Shifting • Safe Packing • Insured Moving • 24×7 Service
          </p>

          <p className="hero-motto highlight-motto">
            “Shifting karna hai? <strong>Jadhav hai na..</strong>”
          </p>

          <div className="hero-cta hero-cta-big">
            <a href="tel:+919930907576">
              📞 CALL NOW <br />
              <span>+91 99309 07576</span>
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="page">
        {/* SERVICE AREAS */}
        <section style={{ textAlign: "center" }}>
          <p>
            Serving  <strong>All over India</strong> <strong>also</strong> <strong>Chembur</strong>, <strong>Tilaknagar</strong>,{" "}
            <strong>Thane</strong> & <strong>Navi Mumbai</strong>
          </p>
        </section>

        {/* WHY CHOOSE US */}
        <section>
          <h2>Why Choose Shree Siddhi Home Packers & Movers?</h2>
          <ul>
            <li>✔ 28+ Years of Industry Experience</li>
            <li>✔ Professional & Trained Staff</li>
            <li>✔ Safe Packing with Quality Materials</li>
            <li>✔ Local & Intercity Relocation</li>
            <li>✔ Insurance Available (If Needed)</li>
            <li>✔ 24×7 Customer Support</li>
          </ul>
        </section>

        {/* SERVICES */}
        <section>
          <h2>Our Services</h2>

          <div className="service-list">
            <div className="service-card">
              <h3>🏠 Household Shifting</h3>
              <p>
                Safe and smooth home relocation with professional packing,
                loading, transportation, and unloading.
              </p>
              <a href="tel:+919930907576">📞 Call Now</a>
            </div>

            <div className="service-card">
              <h3>🏢 Office Relocation</h3>
              <p>
                Professional office shifting with minimal downtime and careful
                handling of equipment.
              </p>
              <a href="tel:+919930907576">📞 Call Now</a>
            </div>

            <div className="service-card">
              <h3>🚚 Local & Outstation Shifting</h3>
              <p>
                Reliable local shifting within Mumbai and intercity shifting
                across India.
              </p>
              <a href="tel:+919930907576">📞 Call Now</a>
            </div>

            <div className="service-card">
              <h3>🚗 Car & Bike Transportation</h3>
              <p>
                Secure vehicle transportation using specialized carriers for
                damage-free delivery.
              </p>
              <a href="tel:+919930907576">📞 Call Now</a>
            </div>

            <div className="service-card">
              <h3>📦 Packing, Unpacking & Insurance</h3>
              <p>
                High-quality packing materials with optional insurance coverage
                for complete peace of mind.
              </p>
              <a href="tel:+919930907576">📞 Call Now</a>
            </div>
          </div>
        </section>
        {/* WORK PHOTOS */}
<section>
  <h2>Our Packing & Moving Work</h2>
  <p>
    Real photos of our professional team handling packing, loading,
    transportation, and unloading with care and safety.
  </p>

  <div className="photo-grid">
    <img src="/images/packing-1.jpg" alt="Professional household packing" />
    <img src="/images/packing-2.jpg" alt="Safe packing with quality materials" />
    <img src="/images/loading.jpg" alt="Loading household goods carefully" />
    <img src="/images/truck.jpg" alt="Packers and movers transport vehicle" />
    <img src="/images/unloading.jpg" alt="Unloading at destination" />
  </div>
</section>

        {/* CTA */}
        <section className="cta-box">
          <h2>Planning to Move?</h2>
          <p>
            Call Shree Siddhi Home Packers & Movers for safe, affordable, and
            hassle-free shifting.
          </p>
          <a href="tel:+919930907576">📞 Call Now – 24×7</a>
        </section>

        {/* ABOUT PREVIEW */}
        <section>
          <h2>About Us</h2>
          <p>
            Shree Siddhi Home Packers & Movers is a trusted relocation service
            provider with over <strong>28+ years of experience</strong>. We
            specialize in household shifting, office relocation, and vehicle
            transportation with complete safety and professionalism.
          </p>
        </section>
      </main>
    </>
  );
}
