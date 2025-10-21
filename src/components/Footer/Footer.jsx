import { NavLink } from 'react-router-dom'

import styles from './Footer.module.scss'

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6 12h10.5M13 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 4l16 16M20 4L4 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9.5c4.5 1 9.5.8 15.5-2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8.5 3.8c3.4 4 5.4 8.7 6.7 16.4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3.5 13.2c3.7-1 8.8-1.3 17-.1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function BehanceIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="3" y="5" width="8.5" height="6" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="13" width="8.5" height="6" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M14 9h6M14.5 16c.5-1.5 1.7-2.5 3.2-2.5 1.7 0 3.3 1.3 3.3 3.2 0 1.9-1.5 3.3-3.4 3.3-1.3 0-2.4-.7-3-1.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.footer__container}>
          {/* CTA card */}
          <section className={styles.footer__cta} aria-labelledby="footer-cta-title">
            <h3 id="footer-cta-title" className={styles.footer__ctaTitle}>
              READY TO TRANSFORM YOUR DIGITAL PRESENCE?
            </h3>
            <p className={styles.footer__ctaText}>
              Take the first step towards digital success with NexGen by your side. Our team of
              experts is eager to craft tailored solutions that drive growth for your business.
            </p>
            <button type="button" className={styles.footer__ctaBtn}>
              GET IN TOUCH <ArrowIcon />
            </button>
          </section>

          {/* Social follow */}
          <section className={styles.footer__social} aria-label="Follow us on social media">
            <div className={styles.footer__socialLabel}>
              <span className={styles.footer__socialEm}>V</span> US ON SOCIAL MEDIA
              <span className={styles.footer__dot} /> FOLLOW US ON SOCIAL
            </div>
            <div className={styles.footer__socialRow}>
              <a href="#" className={styles.footer__socialBtn} aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className={styles.footer__socialBtn} aria-label="Twitter/X">
                <XIcon />
              </a>
              <a href="#" className={styles.footer__socialBtn} aria-label="Dribbble">
                <DribbbleIcon />
              </a>
              <a href="#" className={styles.footer__socialBtn} aria-label="Behance">
                <BehanceIcon />
              </a>
            </div>
          </section>

          {/* Link columns */}
          <section className={styles.footer__links} aria-label="Footer navigation">
            <div className={styles.footer__col}>
              <h4 className={styles.footer__colTitle}>Home</h4>
              <ul className={styles.footer__list}>
                <li>
                  <NavLink to="#why">Why Us</NavLink>
                </li>
                <li>
                  <NavLink to="#about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="#testimonials">Testimonials</NavLink>
                </li>
                <li>
                  <NavLink to="#faq">FAQ’s</NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.footer__col}>
              <h4 className={styles.footer__colTitle}>Services</h4>
              <ul className={styles.footer__list}>
                <li>
                  <NavLink to="#services">Web Development</NavLink>
                </li>
                <li>
                  <NavLink to="#services">App Development</NavLink>
                </li>
                <li>
                  <NavLink to="#services">Web Design</NavLink>
                </li>
                <li>
                  <NavLink to="#services">Digital Marketing</NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.footer__col}>
              <h4 className={styles.footer__colTitle}>Projects</h4>
              <ul className={styles.footer__list}>
                <li>
                  <a href="#">Klothink</a>
                </li>
                <li>
                  <a href="#">Zenith</a>
                </li>
                <li>
                  <a href="#">Novus</a>
                </li>
                <li>
                  <a href="#">Apex</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer__col}>
              <h4 className={styles.footer__colTitle}>Blogs</h4>
              <ul className={styles.footer__list}>
                <li>
                  <a href="#">Business</a>
                </li>
                <li>
                  <a href="#">
                    Design <span className={styles.footer__badge}>Soon</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Development <span className={styles.footer__badge}>Soon</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Newsletter */}
          <section className={styles.footer__newsletter} aria-labelledby="footer-newsletter-title">
            <h4 id="footer-newsletter-title" className={styles.footer__newsletterLabel}>
              Newsletter
            </h4>
            <div className={styles.footer__subscribe}>
              <div className={styles.footer__subscribeTitle}>Subscribe to our newsletter</div>
              <form
                className={styles.footer__subscribeRow}
                onSubmit={e => {
                  e.preventDefault()
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.footer__input}
                />
                <button className={styles.footer__send} aria-label="Subscribe">
                  <ArrowIcon />
                </button>
              </form>
            </div>
          </section>

          {/* Legal */}
          <section className={styles.footer__legal} aria-label="Legal">
            <div className={styles.footer__copyright}>© {year} NexGen. All rights reserved.</div>
            <div className={styles.footer__legalLinks}>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </section>
        </div>
      </div>
    </footer>
  )
}
