import { useState } from 'react'
import { COURSES } from '../config.js'
import styles from './BookPage.module.css'
import pageStyles from './Page.module.css'

export default function BookPage() {
  const [selectedId, setSelectedId] = useState(COURSES[0].id)
  const selectedCourse = COURSES.find(c => c.id === selectedId)

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
              onClick={() => setSelectedId(c.id)}
              className={`${styles.courseOption} ${selectedId === c.id ? styles.courseSelected : ''}`}
            >
              <div className={styles.courseOptionName}>{c.title}</div>
              <div className={styles.courseOptionPrice}>{c.priceLabel}</div>
            </button>
          ))}
        </div>

        {COURSES.map(c => (
          <div
            key={c.id}
            className={styles.calWrap}
            style={{ display: selectedId === c.id ? 'block' : 'none' }}
          >
            <iframe
              src={`https://cal.com/${c.calLink}?embed=true&cache=${c.id}`}
              style={{ width: '100%', height: '700px', border: 'none' }}
              title={c.title}
            />
          </div>
        ))}
      </div>
    </div>
  )
}