import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CONTACT } from '../config.js'
import styles from './Nav.module.css'

const links = [
  { to: '/courses', label: 'Courses' },
  { to: '/about',   label: 'About' },
  { to: '/faq',     label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link to="/" className={styles.logo}>
          <span className={styles.logoName}>West Newton Safety Training</span>
          <span className={styles.logoSub}>Licensed MA Firearms Instructor · {CONTACT.location}</span>
        </Link>

        <div className={styles.desktopLinks}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.linkActive : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/book" className={styles.cta}>Book a class</Link>
        </div>

        <button
          className={styles.burger}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={`${styles.burgerLine} ${open ? styles.burgerOpen : ''}`} />
        </button>
      </nav>

      {open && (
        <div className={styles.drawer}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={styles.drawerLink}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/book" className={styles.drawerCta} onClick={() => setOpen(false)}>
            Book a class
          </Link>
        </div>
      )}
    </header>
  )
}