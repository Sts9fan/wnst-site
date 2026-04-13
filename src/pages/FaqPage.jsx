import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FAQ, CONTACT } from '../config.js'
import styles from './FaqPage.module.css'
import pageStyles from './Page.module.css'

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
      <button className={styles.question} onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.q}</span>
        <span className={styles.chevron}>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className={styles.answer}>
          <p>{item.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <div className={pageStyles.page}>
      <div className={pageStyles.pageHeader}>
        <div className={pageStyles.label}>FAQ</div>
        <h1>Common questions</h1>
        <p>Don't see what you're looking for? Email us and we'll get back to you promptly.</p>
      </div>

      <div className={styles.faqWrap}>
        {FAQ.map((item, i) => (
          <FaqItem
            key={i}
            item={item}
            isOpen={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? null : i)}
          />
        ))}

        <div className={styles.contact}>
          <p>Still have a question?</p>
          <a href={`mailto:${CONTACT.email}`} className={styles.emailLink}>
            {CONTACT.email}
          </a>
          <Link to="/book" className={styles.bookLink}>Or go ahead and book →</Link>
        </div>
      </div>
    </div>
  )
}