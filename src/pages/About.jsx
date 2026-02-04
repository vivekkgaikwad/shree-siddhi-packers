import CallButton from "../components/CallButton";

export default function About() {
  return (
    <>
      <CallButton />

      {/* HERO */}
      <section className="hero hero-center">
        <div className="hero-content">
          <h1 className="brand-title">
            About Shree Siddhi Home Packers & Movers
          </h1>

          <h2 className="experience">
            28+ Years of Trusted Packing & Moving Services
          </h2>

          <p className="hero-sub">
            Reliable • Professional • Customer-Focused Relocation Solutions
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="page">
        {/* WHO WE ARE */}
        <section>
          <h2>Who We Are</h2>
          <p>
            <strong>Shree Siddhi Home Packers & Movers</strong> is a trusted name
            in the packing and moving industry with over{" "}
            <strong>28 years of experience</strong>. We specialize in household
            shifting, office relocation, and vehicle transportation with a
            strong focus on safety, reliability, and customer satisfaction.
          </p>

          <p>
            Over the years, we have successfully handled thousands of moves
            across Mumbai and all over India, earning the trust of our customers
            through honest service and professional execution.
          </p>
        </section>

        {/* WHAT MAKES US DIFFERENT */}
        <section>
          <h2>What Makes Us Different</h2>
          <ul>
            <li>✔ 28+ Years of Industry Experience</li>
            <li>✔ Trained & Professional Packing Staff</li>
            <li>✔ High-Quality Packing Materials</li>
            <li>✔ Safe Loading, Transport & Unloading</li>
            <li>✔ Local & Outstation Relocation</li>
            <li>✔ Optional Insurance Coverage</li>
            <li>✔ 24×7 Customer Support</li>
          </ul>
        </section>

        {/* SERVICE AREAS */}
        <section>
          <h2>Service Areas</h2>
          <p>
            We provide packing and moving services in{" "}
            <strong>Chembur</strong>, <strong>Tilaknagar</strong>,{" "}
            <strong>Thane</strong>, <strong>Navi Mumbai</strong>, and also offer
            <strong> outstation shifting across India</strong>.
          </p>
        </section>

        {/* COMPANY MOTTO */}
        <section>
          <h2>Our Promise</h2>
          <p style={{ fontStyle: "italic", fontSize: "18px" }}>
            “Shifting karna hai? <strong>Jadhav hai na..</strong>”
          </p>
          <p>
            This is not just a tagline for us — it reflects our commitment to
            make your shifting process smooth, stress-free, and dependable.
          </p>
        </section>

        {/* CTA */}
        <section className="cta-box">
          <h2>Planning to Shift?</h2>
          <p>
            Contact Shree Siddhi Home Packers & Movers today for safe, reliable,
            and affordable relocation services.
          </p>
          <a href="tel:+919930907576">📞 Call Now – 24×7</a>
        </section>
      </main>
    </>
  );
}
