import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'

import styles from './MobileMenuModal.module.scss'

export default function MobileMenuModal({ open, onClose }) {
  const dialogRef = useRef(null)
  const closeBtnRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  // Mount/unmount with exit animation
  useEffect(() => {
    if (open) {
      setIsMounted(true)
      setIsClosing(false)
    } else if (isMounted) {
      // trigger closing animation
      setIsClosing(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  // Закрыть по ESC + фокус-трап, пока модалка смонтирована
  useEffect(() => {
    if (!isMounted) return
    const onKey = e => {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab') return
      // Трап фокуса
      const focusables = dialogRef.current?.querySelectorAll(
        'a, button, [tabindex]:not([tabindex="-1"])'
      )
      if (!focusables || focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey, true)
    return () => document.removeEventListener('keydown', onKey, true)
  }, [isMounted, onClose])

  // Фокус при открытии
  useEffect(() => {
    if (open) {
      // Небольшая задержка для стабильного фокуса после монтирования
      const t = setTimeout(() => closeBtnRef.current?.focus(), 0)
      return () => clearTimeout(t)
    }
  }, [open])

  // Блокировка скролла body пока модалка смонтирована
  useEffect(() => {
    if (isMounted) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [isMounted])

  // Размонтируем только после завершения анимации закрытия
  const handlePanelAnimationEnd = _e => {
    if (isClosing) {
      setIsMounted(false)
      setIsClosing(false)
    }
  }

  if (!isMounted) return null

  const onListMouseMove = e => {
    const a = e.target.closest('a')
    if (!a) return
    const rect = a.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    a.style.setProperty('--x', `${x}px`)
    a.style.setProperty('--y', `${y}px`)
  }

  return createPortal(
    <div
      className={`${styles.backdrop} ${isClosing ? styles.closing : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
      onClick={e => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className={`${styles.panel} ${isClosing ? styles.closing : ''}`}
        onAnimationEnd={handlePanelAnimationEnd}
      >
        <div className={styles.header}>
          <span id="mobile-menu-title" className={styles.title}>
            Menu
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            className={styles.closeBtn}
            aria-label="Close menu"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <nav>
          <ul className={styles.list} onClick={onClose} onMouseMove={onListMouseMove}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>,
    document.body
  )
}

MobileMenuModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
