import { NavLink } from 'react-router-dom'

import styles from './HeroSection.module.scss'

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className="container">
        <div className={styles.containerBg}>
          <h1 id="hero-title" className={styles.title}>
            Digital Solutions That Drive Success
          </h1>
          <div className={styles.ctas}>
            <button type="button" className={styles.primaryBtn}>
              <svg
                className={styles.icon}
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.25 0.75L16.5 7M16.5 7L10.25 13.25M16.5 7H1.5"
                  stroke="#0F0F0F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className={styles.cta}>Start a Project</p>
          </div>
          <p className={styles.subtitle}>
            At NexGen, we believe in the transformative power of digital solutions. Our team of
            experts is dedicated to helping businesses like yours thrive in the fast-paced digital
            landscape.
          </p>
          <div className={styles.services}>
            <ul className={styles.serviceList}>
              <li>Branding</li>
              <li>Website Development</li>
              <li>Mobile App Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
