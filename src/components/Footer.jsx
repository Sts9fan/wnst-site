import { Link } from 'react-router-dom'
import { CONTACT } from '../config.js'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <div className={styles.brand}>West Newton Safety Training</div>
          <div className={styles.sub}>{CONTACT.location}</div>
          <a href={`mailto:${CONTACT.email}`} className={styles.email}>{CONTACT.email}</a>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          <Link to="/courses">Courses</Link>
          <Link to="/book">Book a class</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} West Newton Safety Training. All rights reserved.</span>
        <span>westnewtonsafetytraining.com</span>
      </div>
    </footer>
  )
}