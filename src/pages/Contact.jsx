import CallButton from "../components/CallButton";

export default function Contact() {
  return (
    <>
      <CallButton />

      {/* HERO */}
      <section className="hero hero-center">
        <div className="hero-content">
          <h1 className="brand-title">
            Contact Shree Siddhi Home Packers & Movers
          </h1>

          <h2 className="experience">
            We Are Available 24×7 for Your Shifting Needs
          </h2>

          <p className="hero-sub">
            Call us today for safe, reliable & affordable packing and moving
            services.
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
        {/* PHONE */}
        <section>
          <h2>Call Us</h2>
          <p>
            📞 Primary:{" "}
            <a href="tel:+919930907576">+91 99309 07576</a>
          </p>
          <p>
            📞 Secondary:{" "}
            <a href="tel:+919322701051">+91 93227 01051</a>
          </p>
        </section>

        {/* EMAIL */}
        <section>
          <h2>Email Us</h2>
          <p>
            📧{" "}
            <a href="mailto:shreesiddhihomepackers@gmail.com">
              shreesiddhihomepackers@gmail.com
            </a>
          </p>
        </section>

        {/* ADDRESS */}
        <section>
          <h2>Office Address</h2>
          <p>
            📍 302, Wardhmandham,
            <br />
            Kamothe Sector 5
          </p>
        </section>

        {/* SERVICE AREAS */}
        <section>
          <h2>Service Areas</h2>
          <p>
            We serve <strong>Chembur</strong>, <strong>Tilaknagar</strong>,{" "}
            <strong>Thane</strong>, <strong>Navi Mumbai</strong> and provide
            <strong> outstation shifting all over India</strong>.
          </p>
        </section>

        {/* SOCIAL */}
        <section>
          <h2>Follow Us</h2>
          <p>
            📷 Instagram:{" "}
            <a
              href="https://www.instagram.com/shree_siddhi_home_packers"
              target="_blank"
              rel="noopener noreferrer"
            >
              @shree_siddhi_home_packers
            </a>
          </p>
        </section>

        {/* FINAL CTA */}
        <section className="cta-box">
          <h2>Need Immediate Assistance?</h2>
          <p>
            Call Shree Siddhi Home Packers & Movers now and move without stress.
          </p>
          <a href="tel:+919930907576">📞 Call Now – 24×7</a>
        </section>
      </main>
    </>
  );
}
