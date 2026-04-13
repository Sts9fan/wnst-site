import { Link } from 'react-router-dom'
import { ABOUT, CONTACT } from '../config.js'
import styles from './AboutPage.module.css'
import pageStyles from './Page.module.css'

export default function AboutPage() {
  return (
    <div className={pageStyles.page}>
      <div className={pageStyles.pageHeader}>
        <div className={pageStyles.label}>About us</div>
        <h1>{ABOUT.heading}</h1>
      </div>

      <div className={styles.layout}>
        <div className={styles.body}>
          {ABOUT.body.map((p, i) => (
            <p key={i} className={styles.para}>{p}</p>
          ))}

          <div className={styles.divider} />

          <h3 className={styles.h3}>Our approach</h3>
          <p className={styles.para}>
            We believe that safety education works best when students feel comfortable asking
            questions — even the ones they think might sound basic. Every class is deliberately
            small so that no one gets lost in the crowd, and instruction is always paced to the
            group in the room.
          </p>
          <p className={styles.para}>
            Whether you're applying for your first LTC, buying your first firearm, or returning
            to shooting after years away, you'll find the same thing here: a calm, thorough,
            welcoming environment. We serve Newton and the surrounding communities.
          </p>

          <div className={styles.divider} />

          <h3 className={styles.h3}>Credentials</h3>
          <ul className={styles.credList}>
            {ABOUT.credentials.map((c, i) => (
              <li key={i} className={styles.credItem}>
                <span className={styles.check}>✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className={styles.cta}>
            <Link to="/book" className={styles.ctaBtn}>Book a class</Link>
            <a href={`mailto:${CONTACT.email}`} className={styles.ctaLink}>
              {CONTACT.email}
            </a>
          </div>
        </div>

        <aside className={styles.aside}>
          <div className={styles.asideCard}>
            <div className={styles.asideTitle}>Quick facts</div>
            <div className={styles.factRow}><span>Location</span><span>Newton, MA</span></div>
            <div className={styles.factRow}><span>Max class size</span><span>4 students</span></div>
            <div className={styles.factRow}><span>Private sessions</span><span>Available</span></div>
            <div className={styles.factRow}><span>Certification</span><span>State-approved</span></div>
          </div>
          <div className={styles.asideCard}>
            <div className={styles.asideTitle}>Who we teach</div>
            <ul className={styles.whoList}>
              {[
                'First-time firearm owners',
                'LTC / FID applicants',
                'Parents researching home safety',
                'People returning to shooting',
                'Anyone new to firearms',
                'Experienced owners wanting a refresher',
              ].map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}