import { useState, useEffect } from 'react'
import { COURSES } from '../config.js'
import styles from './BookPage.module.css'
import pageStyles from './Page.module.css'

export default function BookPage() {
  const [selectedCourse, setSelectedCourse] = useState(COURSES[0])

  return (
    <div className={pageStyles.page}>
      <div className={pageStyles.pageHeader}>
        <div className={pageStyles.label}>Booking</div>
        <h1>Reserve your spot</h1>
        <p>Select a course below and pick a date and time that works for you.
           Payment is collected securely via Stripe at checkout.</p>
      </div>

      <div className={styles.wrap}>
        <div className={styles.courseOptions}>
          {COURSES.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedCourse(c)}
              className={`${styles.courseOption} ${selectedCourse.id === c.id ? styles.courseSelected : ''}`}
            >
              <div className={styles.courseOptionName}>{c.title}</div>
              <div className={styles.courseOptionPrice}>{c.priceLabel}</div>
            </button>
          ))}
        </div>

        <div className={styles.calWrap}>
          <iframe
            key={selectedCourse.calLink}
            src={`https://cal.com/${selectedCourse.calLink}?embed=true`}
            style={{ width: '100%', height: '700px', border: 'none' }}
            title="Book a session"
          />
        </div>
      </div>
    </div>
  )
}