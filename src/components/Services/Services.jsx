import styles from './Services.module.scss'

const servicesData = [
  {
    id: 1,
    title: 'Expertise in Cutting-Edge Technologies',
    description:
      'NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing...',
  },
  {
    id: 2,
    title: 'Proven Track Record of Success',
    description:
      'NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable...',
  },
  {
    id: 3,
    title: 'Client-Centric Approach',
    description:
      'NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable...',
  },
  {
    id: 4,
    title: 'Dedicated Team of Professionals',
    description:
      'Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable...',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.services} aria-labelledby="services-title">
      <div className="container">
        <div className={styles.servicesContainer}>
          <div className={styles.servicesContainerTitle}>
            <h2 className={styles.servicesContainerTitleText}>
              Reasons to Choose NexGen for Your Digital Journey
            </h2>
          </div>
          {servicesData.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <h3 className={styles.serviceCardTitle}>{service.title}</h3>
              <p className={styles.serviceCardDescr}>{service.description}</p>
              <div className={styles.serviceCardLink}>
                <div className={styles.serviceCardLinkIcon}>
                  <svg
                    className={styles.serviceIcon}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.875 0.125L13.25 0.125C13.4158 0.125 13.5747 0.190848 13.6919 0.308058C13.8092 0.425269 13.875 0.58424 13.875 0.75V10.125C13.875 10.4702 13.5952 10.75 13.25 10.75C12.9048 10.75 12.625 10.4702 12.625 10.125V2.25888L1.19194 13.6919C0.947864 13.936 0.552136 13.936 0.308058 13.6919C0.0639806 13.4479 0.0639806 13.0521 0.308058 12.8081L11.7411 1.375L3.875 1.375C3.52982 1.375 3.25 1.09518 3.25 0.75C3.25 0.404822 3.52982 0.125 3.875 0.125Z"
                      fill="#E7BEB1"
                    />
                  </svg>
                </div>
                <span className={styles.serviceCardLinkText}>Learn More</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
