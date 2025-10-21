import { useState } from 'react'

import styles from './Portfolio.module.scss'

import portfolio1 from '@/image/portfolio1.webp'
import portfolio2 from '@/image/portfolio2.webp'

export default function Portfolio() {
  const items = [
    {
      id: 1,
      image: portfolio1,
      icon: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5361 2.15175L10.963 2.49112C10.3336 2.86388 10.0189 3.05026 9.67216 3.09369C9.32545 3.13711 8.98602 3.03266 8.30715 2.82376L7.6891 2.63357C5.30014 1.89844 4.10566 1.53087 3.38765 2.18804C2.66964 2.8452 2.90362 4.09188 3.37158 6.58524L3.49264 7.23031C3.62562 7.93884 3.69211 8.29311 3.61324 8.6392C3.53437 8.98529 3.31907 9.28402 2.88846 9.88148L2.49643 10.4254C0.981113 12.5279 0.223455 13.5792 0.593087 14.4507C0.962718 15.3222 2.21484 15.4368 4.71909 15.666L5.36698 15.7253C6.0786 15.7905 6.43443 15.823 6.73239 15.9935C7.03035 16.164 7.23672 16.4531 7.64945 17.0312L8.02522 17.5576C9.47766 19.5921 10.2039 20.6094 11.1503 20.4909C12.0968 20.3723 12.6367 19.1965 13.7164 16.8448L13.9958 16.2364C14.1526 15.8948 14.2693 15.6406 14.3811 15.4414L18.9702 20.0305C19.2631 20.3234 19.7379 20.3234 20.0308 20.0305C20.3237 19.7376 20.3237 19.2627 20.0308 18.9698L15.599 14.5381C15.721 14.4937 15.8572 14.446 16.0106 14.3923L16.6349 14.1736C19.0478 13.3285 20.2543 12.906 20.4696 11.9612C20.6849 11.0165 19.7665 10.1751 17.9296 8.4925L17.4543 8.05717C16.9323 7.57902 16.6713 7.33993 16.5359 7.02068C16.4005 6.70143 16.406 6.33815 16.4171 5.6116L16.4271 4.95008C16.466 2.39325 16.4854 1.11483 15.672 0.649465C14.8586 0.1841 13.7511 0.839986 11.5361 2.15175Z"
            fill="#CE7D63"
            stroke="black"
          />
        </svg>
      ),
      title: 'A-AURA ECOMMERCE',
      category: 'Web Design -    Development',
      time: '3 months',
      description:
        'A complete overhaul of a corporate website to enhance its brand identity and user experience.',
      iconBtn: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.875 3.125L16.25 3.125C16.4158 3.125 16.5747 3.19085 16.6919 3.30806C16.8092 3.42527 16.875 3.58424 16.875 3.75V13.125C16.875 13.4702 16.5952 13.75 16.25 13.75C15.9048 13.75 15.625 13.4702 15.625 13.125V5.25888L4.19194 16.6919C3.94786 16.936 3.55214 16.936 3.30806 16.6919C3.06398 16.4479 3.06398 16.0521 3.30806 15.8081L14.7411 4.375L6.875 4.375C6.52982 4.375 6.25 4.09518 6.25 3.75C6.25 3.40482 6.52982 3.125 6.875 3.125Z"
            fill="#E7BEB1"
          />
        </svg>
      ),
    },
    {
      id: 2,
      image: portfolio2,
      icon: (
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.9998 7.56052C15.0332 11.7025 11.5815 15.5334 7.43948 15.5C3.29748 15.4666 0.0336738 11.5815 0.000249384 7.43948C-0.033175 3.29748 3.29748 -0.033175 7.43948 0.000249384C11.5815 0.0336738 14.9663 3.41852 14.9998 7.56052ZM8.00605 3.25003C7.59185 3.24668 7.25337 3.57975 7.25002 3.99395C7.24668 4.40815 7.57975 4.74663 7.99395 4.74998C9.22806 4.75993 10.2401 5.77194 10.25 7.00605C10.2534 7.42025 10.5919 7.75332 11.0061 7.74998C11.4203 7.74663 11.7533 7.40815 11.75 6.99395C11.7334 4.94088 10.0591 3.26659 8.00605 3.25003Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      title: 'FinTech Dashboard',
      category: 'UI/UX, Product',
      time: '2 months',
      description: 'Design system and analytics dashboards for a fintech SaaS platform.',
      iconBtn: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.875 3.125L16.25 3.125C16.4158 3.125 16.5747 3.19085 16.6919 3.30806C16.8092 3.42527 16.875 3.58424 16.875 3.75V13.125C16.875 13.4702 16.5952 13.75 16.25 13.75C15.9048 13.75 15.625 13.4702 15.625 13.125V5.25888L4.19194 16.6919C3.94786 16.936 3.55214 16.936 3.30806 16.6919C3.06398 16.4479 3.06398 16.0521 3.30806 15.8081L14.7411 4.375L6.875 4.375C6.52982 4.375 6.25 4.09518 6.25 3.75C6.25 3.40482 6.52982 3.125 6.875 3.125Z"
            fill="#E7BEB1"
          />
        </svg>
      ),
    },
    {
      id: 3,
      image: portfolio1,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0356 3.6516L12.4625 3.99097C11.8331 4.36373 11.5184 4.55011 11.1717 4.59353C10.825 4.63696 10.4855 4.53251 9.80666 4.3236L9.18861 4.13342C6.79965 3.39828 5.60517 3.03072 4.88716 3.68788C4.16916 4.34505 4.40313 5.59173 4.87109 8.08509L4.99216 8.73015C5.12513 9.43868 5.19162 9.79295 5.11275 10.139C5.03388 10.4851 4.81858 10.7839 4.38797 11.3813L3.99594 11.9253C2.48063 14.0278 1.72297 15.079 2.0926 15.9505C2.46223 16.8221 3.71435 16.9367 6.2186 17.1659L6.8665 17.2252C7.57812 17.2903 7.93394 17.3229 8.2319 17.4934C8.52986 17.6638 8.73623 17.9529 9.14897 18.5311L9.52473 19.0574C10.9772 21.092 11.7034 22.1092 12.6498 21.9907C13.5963 21.8722 14.1362 20.6963 15.2159 18.3446L15.4953 17.7362C15.6521 17.3947 15.7688 17.1404 15.8806 16.9413L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L17.0986 16.0379C17.2206 15.9935 17.3568 15.9458 17.5101 15.8921L18.1344 15.6735C20.5474 14.8284 21.7538 14.4059 21.9691 13.4611C22.1845 12.5163 21.266 11.675 19.4291 9.99234L18.9538 9.55701C18.4318 9.07887 18.1708 8.83978 18.0354 8.52053C17.9 8.20128 17.9055 7.838 17.9166 7.11145L17.9266 6.44993C17.9655 3.8931 17.9849 2.61468 17.1715 2.14931C16.3582 1.68395 15.2506 2.33983 13.0356 3.6516Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      title: 'Brand Identity Kit',
      category: 'Branding',
      time: '1.5 months',
      description: 'Logo, palette, typography and marketing materials for a startup.',
      iconBtn: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.875 3.125L16.25 3.125C16.4158 3.125 16.5747 3.19085 16.6919 3.30806C16.8092 3.42527 16.875 3.58424 16.875 3.75V13.125C16.875 13.4702 16.5952 13.75 16.25 13.75C15.9048 13.75 15.625 13.4702 15.625 13.125V5.25888L4.19194 16.6919C3.94786 16.936 3.55214 16.936 3.30806 16.6919C3.06398 16.4479 3.06398 16.0521 3.30806 15.8081L14.7411 4.375L6.875 4.375C6.52982 4.375 6.25 4.09518 6.25 3.75C6.25 3.40482 6.52982 3.125 6.875 3.125Z"
            fill="#E7BEB1"
          />
        </svg>
      ),
    },
    {
      id: 4,
      image: portfolio2,
      icon: (
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.9998 7.56052C15.0332 11.7025 11.5815 15.5334 7.43948 15.5C3.29748 15.4666 0.0336738 11.5815 0.000249384 7.43948C-0.033175 3.29748 3.29748 -0.033175 7.43948 0.000249384C11.5815 0.0336738 14.9663 3.41852 14.9998 7.56052ZM8.00605 3.25003C7.59185 3.24668 7.25337 3.57975 7.25002 3.99395C7.24668 4.40815 7.57975 4.74663 7.99395 4.74998C9.22806 4.75993 10.2401 5.77194 10.25 7.00605C10.2534 7.42025 10.5919 7.75332 11.0061 7.74998C11.4203 7.74663 11.7533 7.40815 11.75 6.99395C11.7334 4.94088 10.0591 3.26659 8.00605 3.25003Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      title: 'Mobile App Revamp',
      category: 'Mobile, UX',
      time: '6 weeks',
      description: 'Restructured flows and visual refresh to improve retention and NPS.',
      iconBtn: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.875 3.125L16.25 3.125C16.4158 3.125 16.5747 3.19085 16.6919 3.30806C16.8092 3.42527 16.875 3.58424 16.875 3.75V13.125C16.875 13.4702 16.5952 13.75 16.25 13.75C15.9048 13.75 15.625 13.4702 15.625 13.125V5.25888L4.19194 16.6919C3.94786 16.936 3.55214 16.936 3.30806 16.6919C3.06398 16.4479 3.06398 16.0521 3.30806 15.8081L14.7411 4.375L6.875 4.375C6.52982 4.375 6.25 4.09518 6.25 3.75C6.25 3.40482 6.52982 3.125 6.875 3.125Z"
            fill="#E7BEB1"
          />
        </svg>
      ),
    },
  ]

  const [visible, setVisible] = useState(2)
  const showMore = () => setVisible(v => Math.min(v + 2, items.length))
  const showLess = () => setVisible(2)

  return (
    <section id="portfolio" className={styles.portfolio} aria-labelledby="portfolio-title">
      <div className="container">
        <div className={styles.container__bg}>
          <h2 id="portfolio-title" className={styles.portfolio__title}>
            Our Works
          </h2>
          <div className={styles.portfolio__grid}>
            {items.slice(0, visible).map(item => (
              <article key={item.id} className={styles.portfolio__card}>
                <div className={styles['portfolio__card-media']}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className={styles['portfolio__card-body']}>
                  <div className={styles['portfolio__card-header']}>
                    <span className={styles['portfolio__card-badge']} aria-hidden>
                      {item.icon}
                    </span>
                    <h3 className={styles['portfolio__card-title']}>{item.title}</h3>
                  </div>
                  <div className={styles['portfolio__card-meta']}>
                    <span className={styles['portfolio__meta-pill']}>
                      Category <span className={styles['portfolio__meta-dot']}>•</span>{' '}
                      {item.category}
                    </span>
                    <span className={styles['portfolio__meta-pill']}>
                      Time Taken <span className={styles['portfolio__meta-dot']}>•</span>{' '}
                      {item.time}
                    </span>
                  </div>
                  <p className={styles['portfolio__card-descr']}>{item.description}</p>
                  <button className={styles['portfolio__card-cta']} type="button">
                    <span className={styles['portfolio__card-cta-icon']} aria-hidden>
                      {item.iconBtn}
                    </span>
                    <span className={styles['portfolio__card-cta-text']}>Details</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.portfolio__actions}>
            {visible < items.length ? (
              <button className={styles['portfolio__load-more']} type="button" onClick={showMore}>
                All works
              </button>
            ) : (
              <button className={styles['portfolio__load-more']} type="button" onClick={showLess}>
                Show less
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
