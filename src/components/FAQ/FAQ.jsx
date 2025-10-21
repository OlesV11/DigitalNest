import { useId, useState } from 'react'

import styles from './FAQ.module.scss'

// Inline SVG components for the toggle button
function PlusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M15.8335 9.16658H10.8335V4.16659C10.8335 3.94557 10.7457 3.73361 10.5894 3.57733C10.4331 3.42105 10.2212 3.33325 10.0002 3.33325C9.77915 3.33325 9.56719 3.42105 9.41091 3.57733C9.25463 3.73361 9.16683 3.94557 9.16683 4.16659V9.16658H4.16683C3.94582 9.16658 3.73385 9.25438 3.57757 9.41066C3.42129 9.56694 3.3335 9.7789 3.3335 9.99992C3.3335 10.2209 3.42129 10.4329 3.57757 10.5892C3.73385 10.7455 3.94582 10.8333 4.16683 10.8333H9.16683V15.8333C9.16683 16.0543 9.25463 16.2662 9.41091 16.4225C9.56719 16.5788 9.77915 16.6666 10.0002 16.6666C10.2212 16.6666 10.4331 16.5788 10.5894 16.4225C10.7457 16.2662 10.8335 16.0543 10.8335 15.8333V10.8333H15.8335C16.0545 10.8333 16.2665 10.7455 16.4228 10.5892C16.579 10.4329 16.6668 10.2209 16.6668 9.99992C16.6668 9.7789 16.579 9.56694 16.4228 9.41066C16.2665 9.25438 16.0545 9.16658 15.8335 9.16658Z"
        fill="#E7BEB1"
      />
    </svg>
  )
}

function MinusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4.16683 10.8333H15.8335C16.0545 10.8333 16.2665 10.7455 16.4228 10.5892C16.579 10.4329 16.6668 10.2209 16.6668 9.99992C16.6668 9.7789 16.579 9.56694 16.4228 9.41066C16.2665 9.25438 16.0545 9.16658 15.8335 9.16658H4.16683C3.94582 9.16658 3.73385 9.25438 3.57757 9.41066C3.42129 9.56694 3.3335 9.7789 3.3335 9.99992C3.3335 10.2209 3.42129 10.4329 3.57757 10.5892C3.73385 10.7455 3.94582 10.8333 4.16683 10.8333Z"
        fill="#E7BEB1"
      />
    </svg>
  )
}

const items = [
  {
    q: 'How long does it take to complete a web development project?',
    a: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    q: 'Can you handle large-scale mobile app development projects?',
    a: 'Yes. We design scalable architectures, use cloud-native tools, and follow best practices to ensure reliability and performance at scale.',
  },
  {
    q: 'Can you integrate third-party APIs into our mobile app?',
    a: 'Absolutely. We regularly integrate payment gateways, social auth, analytics, maps, and custom partner APIs with robust error handling and security.',
  },
  {
    q: 'How do you ensure cross-platform compatibility for mobile apps?',
    a: 'We use proven cross-platform stacks and device labs for QA to ensure consistent behavior across iOS and Android.',
  },
  {
    q: 'What does your post-launch support look like?',
    a: 'We offer maintenance plans that include monitoring, updates, bug fixes, and performance improvements.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(() => items.map(() => false))
  const rootId = useId()

  const toggle = idx => {
    setOpen(prev => prev.map((v, i) => (i === idx ? !v : v)))
  }

  return (
    <section id="faq" className={styles.faq} aria-labelledby={`faq-title-${rootId}`}>
      <div className="container">
        <div className={styles.faq__container}>
          <h2 id={`faq-title-${rootId}`} className={styles.faq__title}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faq__list}>
            {items.map((it, idx) => {
              const isOpen = open[idx]
              const contentId = `faq-panel-${idx}-${rootId}`
              return (
                <article
                  key={it.q}
                  className={`${styles.faq__item} ${isOpen ? styles['is-open'] : ''}`}
                >
                  <header className={styles.faq__header}>
                    <h3 className={styles.faq__question}>{it.q}</h3>
                    <button
                      type="button"
                      className={styles.faq__toggle}
                      aria-controls={contentId}
                      aria-expanded={isOpen}
                      onClick={() => toggle(idx)}
                    >
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </button>
                  </header>
                  <div
                    id={contentId}
                    role="region"
                    aria-hidden={!isOpen}
                    className={styles.faq__content}
                  >
                    <div className={styles.faq__divider} />
                    <p className={styles.faq__answer}>{it.a}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
        {/* form */}
        <div className={styles.faq__formWrap}>
          <form
            className={styles.faq__form}
            aria-labelledby={`faq-form-title-${rootId}`}
            onSubmit={e => {
              e.preventDefault()
              const form = e.currentTarget
              const data = new FormData(form)
              console.log('FAQ form submit:', Object.fromEntries(data))
              form.reset()
            }}
            noValidate
          >
            <h3 id={`faq-form-title-${rootId}`} className={styles.faq__formTitle}>
              Ask your question
            </h3>
            <div className={styles.faq__formDivider} />

            <div className={styles.faq__field}>
              <label htmlFor={`faq-name-${rootId}`} className={styles.faq__label}>
                Name
              </label>
              <input
                id={`faq-name-${rootId}`}
                name="name"
                type="text"
                placeholder="Enter your name"
                className={styles.faq__input}
                autoComplete="name"
              />
            </div>

            <div className={styles.faq__field}>
              <label htmlFor={`faq-email-${rootId}`} className={styles.faq__label}>
                Email
              </label>
              <input
                id={`faq-email-${rootId}`}
                name="email"
                type="email"
                placeholder="Enter your email"
                className={styles.faq__input}
                autoComplete="email"
              />
            </div>

            <div className={styles.faq__field}>
              <label htmlFor={`faq-message-${rootId}`} className={styles.faq__label}>
                Your question
              </label>
              <textarea
                id={`faq-message-${rootId}`}
                name="message"
                rows={4}
                placeholder="Enter Your Question Here ....."
                className={styles.faq__textarea}
              />
            </div>

            <button type="submit" className={styles.faq__submit}>
              Send your message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
