import { useState, useEffect } from 'react'
import { COURSES } from '../config.js'
import styles from './BookPage.module.css'
import pageStyles from './Page.module.css'

function loadCal() {
  return new Promise((resolve) => {
    if (window.Cal) { resolve(); return; }
    const script = document.createElement('script')
    script.src = 'https://app.cal.com/embed/embed.js'
    script.onload = resolve
    document.head.appendChild(script)
  })
}

export default function BookPage() {
  const [selectedId, setSelectedId] = useState(COURSES[0].id)

  useEffect(() => {
    loadCal().then(() => {
      // Init LTC class
      Cal("init", "ltc-class", { origin: "https://app.cal.com" })
      Cal.ns["ltc-class"]("inline", {
        elementOrSelector: "#my-cal-inline-ltc-class",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "kris-jntnsj/ltc-class",
      })
      Cal.ns["ltc-class"]("ui", { hideEventTypeDetails: false, layout: "month_view" })

      // Init private instruction
      Cal("init", "private-instruction", { origin: "https://app.cal.com" })
      Cal.ns["private-instruction"]("inline", {
        elementOrSelector: "#my-cal-inline-private-instruction",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "kris-jntnsj/private-instruction",
      })
      Cal.ns["private-instruction"]("ui", { hideEventTypeDetails: false, layout: "month_view" })
    })
  }, [])

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

        <div style={{ display: selectedId === 'ltc-fid' ? 'block' : 'none' }}>
          <div
            id="my-cal-inline-ltc-class"
            className={styles.calWrap}
          />
        </div>

        <div style={{ display: selectedId === 'private' ? 'block' : 'none' }}>
          <div
            id="my-cal-inline-private-instruction"
            className={styles.calWrap}
          />
        </div>
      </div>
    </div>
  )
}