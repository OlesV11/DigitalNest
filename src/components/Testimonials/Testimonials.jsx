import { useState } from 'react'

import styles from './Testimonials.module.scss'

import testimonial1 from '@/image/testimon1.webp'
import testimonial2 from '@/image/testimon2.webp'
import testimonial3 from '@/image/testimon3.webp'

const quotes = [
  {
    title: 'NexGen turned our business around!',
    text: 'Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!',
    imageIcon: testimonial1,
    author: 'Sarah Thompson ',
    speciality: 'CEO of BlueBloom',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5"
          stroke="#E7BEB1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'NexGen turned our business around!',
    text: 'Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!',
    imageIcon: testimonial2,
    author: 'Wade Warren',
    speciality: 'Art Director',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5"
          stroke="#E7BEB1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Working with NexGen was a pleasure.',
    text: 'Their web design team created a stunning website that perfectly captured our brand identity. The user experience is seamless, and we have received numerous compliments from our clients.',
    imageIcon: testimonial3,
    author: 'Lisa Williams',
    speciality: 'CEO Of HealthTech',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5"
          stroke="#E7BEB1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export default function Testimonials() {
  const data =
    quotes.length >= 6
      ? quotes.slice(0, 6)
      : Array.from({ length: 6 }, (_, i) => ({
          ...quotes[i % quotes.length],
          __idx: i,
        }))

  const [visible, setVisible] = useState(3)
  const showMore = () => setVisible(v => Math.min(v + 3, data.length))
  const showLess = () => setVisible(3)

  return (
    <section id="testimonials" className={styles.testimonials} aria-labelledby="testimonials-title">
      <div className="container">
        <div className={styles.testimonials__container}>
          <h2 className={styles.testimonials__title} id="testimonials-title">
            Testimonials
          </h2>
          <ul className={styles.testimonials__list}>
            {data.slice(0, visible).map((q, i) => (
              <li
                key={(q.author || 'author') + '-' + (q.__idx ?? i)}
                className={styles.testimonials__item}
              >
                <div className={styles.testimonials__card}>
                  <div className={styles.testimonials__cardContent}>
                    <h3 className={styles.testimonials__cardTitle}>{q.title}</h3>
                    <p className={styles.testimonials__cardText}>{q.text}</p>
                  </div>
                  <div className={styles.testimonials__cardFooter}>
                    <div className={styles.testimonials__cardAuthor}>
                      <div className={styles.testimonials__avatar}>
                        <img src={q.imageIcon} alt={q.author} loading="lazy" />
                      </div>
                      <div className={styles.testimonials__authorBlock}>
                        <div className={styles.testimonials__authorName}>{q.author}</div>
                        <div className={styles.testimonials__authorRole}>{q.speciality}</div>
                      </div>
                    </div>
                    <button
                      className={styles.testimonials__cardAction}
                      type="button"
                      aria-label="Open testimonial"
                    >
                      {q.icon}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.testimonialsactions}>
            {visible < data.length ? (
              <button className={styles.testimonials__more} type="button" onClick={showMore}>
                ALL Testimonials
              </button>
            ) : (
              <button className={styles.testimonials__more} type="button" onClick={showLess}>
                Show less
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
