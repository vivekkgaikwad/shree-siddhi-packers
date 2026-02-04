export default function Footer() {
  return (
    <footer className="footer">
      <div className="page">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {/* BRAND */}
          <div>
            <h3>Shree Siddhi Home Packers & Movers</h3>
            <p>
              Trusted packers and movers with over{" "}
              <strong>28+ years</strong> of experience. We provide safe,
              reliable, and affordable relocation services across Mumbai and
              India.
            </p>
            <p style={{ fontStyle: "italic", marginTop: "10px" }}>
              “Shifting karna hai? Jadhav hai na..”
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3>Our Services</h3>
            <p>Household Shifting</p>
            <p>Office Relocation</p>
            <p>Local & Outstation Shifting</p>
            <p>Car & Bike Transportation</p>
            <p>Packing & Insurance</p>
          </div>

          {/* CONTACT */}
          <div>
            <h3>Contact Us</h3>
            <p>
              📞{" "}
              <a href="tel:+919930907576">
                +91 99309 07576
              </a>
            </p>
            <p>
              📞{" "}
              <a href="tel:+919322701051">
                +91 93227 01051
              </a>
            </p>
            <p>
              📧{" "}
              <a href="mailto:shreesiddhihomepackers@gmail.com">
                shreesiddhihomepackers@gmail.com
              </a>
            </p>
            <p>
              📍 302, Wardhmandham,
              <br />
              Kamothe Sector 5
            </p>
          </div>

          {/* SERVICE AREAS & SOCIAL */}
          <div>
            <h3>Service Areas</h3>
            <p>Chembur</p>
            <p>Tilaknagar</p>
            <p>Thane</p>
            <p>Navi Mumbai</p>
            <p>Outstation – All Over India</p>

            <p style={{ marginTop: "10px" }}>
              📷{" "}
              <a
                href="https://www.instagram.com/shree_siddhi_home_packers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          style={{
            marginTop: "40px",
            borderTop: "1px solid #333",
            paddingTop: "20px",
            textAlign: "center",
            fontSize: "14px",
            color: "#aaa",
          }}
        >
          © {new Date().getFullYear()} Shree Siddhi Home Packers & Movers. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
