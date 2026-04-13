import { Link } from 'react-router-dom'
import { HERO, ABOUT, COURSES } from '../config.js'
import CourseCard from '../components/CourseCard.jsx'
import styles from './HomePage.module.css'

const trustItems = [
  { icon: '✓', text: 'State-certified instructor' },
  { icon: '✓', text: 'All experience levels welcome' },
  { icon: '✓', text: 'Small class sizes' },
  { icon: '✓', text: 'Judgment-free environment' },
  { icon: '✓', text: 'Newton, MA based' },
]

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>{HERO.badge}</div>
          <h1 className={styles.h1}>
            {HERO.heading}<br />
            <em className={styles.accent}>{HERO.headingAccent}</em>
          </h1>
          <p className={styles.sub}>{HERO.subheading}</p>
          <div className={styles.heroBtns}>
            <Link to="/courses" className={styles.btnPrimary}>{HERO.ctaPrimary}</Link>
            <Link to="/contact" className={styles.btnOutline}>{HERO.ctaSecondary}</Link>
          </div>
        </div>
      </section>

      <div className={styles.trustStrip}>
        {trustItems.map((t, i) => (
          <div key={i} className={styles.trustItem}>
            <span className={styles.trustIcon}>{t.icon}</span>
            <span>{t.text}</span>
          </div>
        ))}
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div className={styles.sectionLabel}>Courses offered</div>
          <h2>Choose the right class for you</h2>
          <p className={styles.sectionLead}>
            Every course is designed for real people at real starting points — no assumptions about
            your background, experience, or why you're here.
          </p>
        </div>
        <div className={styles.courseGrid}>
          {COURSES.map(c => <CourseCard key={c.id} course={c} />)}
        </div>
        <div className={styles.center}>
          <Link to="/courses" className={styles.moreLink}>See full course details →</Link>
        </div>
      </section>

      <section className={styles.aboutStrip}>
        <div className={styles.aboutInner}>
          <div>
            <div className={styles.sectionLabel} style={{ color: 'var(--sage-light)' }}>About</div>
            <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>{ABOUT.heading}</h2>
            {ABOUT.body.map((p, i) => (
              <p key={i} className={styles.aboutP}>{p}</p>
            ))}
          </div>
          <div className={styles.credBox}>
            <div className={styles.credTitle}>Credentials</div>
            {ABOUT.credentials.map((c, i) => (
              <div key={i} className={styles.credItem}>
                <span className={styles.credCheck}>✓</span>
                <span>{c}</span>
              </div>
            ))}
            <Link to="/about" className={styles.learnMore}>Learn more about us →</Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to get started?</h2>
        <p>Browse available dates and reserve your spot. Payment is collected securely at checkout via Stripe.</p>
        <Link to="/book" className={styles.btnPrimary} style={{ marginTop: '1.5rem', display: 'inline-block' }}>
          Book a class
        </Link>
      </section>
    </>
  )
}
