import { useState } from 'react'
import { CONTACT } from '../config.js'
import styles from './ContactPage.module.css'
import pageStyles from './Page.module.css'

const FORM_ENDPOINT = 'https://formspree.io/f/xnjlqppe'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!FORM_ENDPOINT) {
      setSubmitted(true)
      return
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setSubmitted(true)
      else setError('Something went wrong. Please email us directly.')
    } catch {
      setError('Network error. Please email us directly.')
    }
  }

  return (
    <div className={pageStyles.page}>
      <div className={pageStyles.pageHeader}>
        <div className={pageStyles.label}>Contact</div>
        <h1>Get in touch</h1>
        <p>Questions about courses, scheduling, or anything else — we'll get back to you quickly.</p>
      </div>

      <div className={styles.layout}>
        {submitted ? (
          <div className={styles.successBox}>
            <div className={styles.successIcon}>✓</div>
            <h2>Message received</h2>
            <p>We'll be in touch soon at the email you provided.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label className={styles.label}>Your name</label>
              <input
                name="name" value={form.name} onChange={handleChange}
                className={styles.input} placeholder="Jane Smith" required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email address</label>
              <input
                type="email" name="email" value={form.email} onChange={handleChange}
                className={styles.input} placeholder="jane@email.com" required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Message</label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                className={styles.textarea} rows={5}
                placeholder="What would you like to know?" required
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.submitBtn}>Send message →</button>
          </form>
        )}

        <aside className={styles.aside}>
          <div className={styles.asideCard}>
            <div className={styles.asideLabel}>Email</div>
            <a href={`mailto:${CONTACT.email}`} className={styles.asideValue}>
              {CONTACT.email}
            </a>
          </div>
          {CONTACT.phone && (
            <div className={styles.asideCard}>
              <div className={styles.asideLabel}>Phone</div>
              <a href={`tel:${CONTACT.phone}`} className={styles.asideValue}>
                {CONTACT.phone}
              </a>
            </div>
          )}
          <div className={styles.asideCard}>
            <div className={styles.asideLabel}>Location</div>
            <div className={styles.asideValue}>{CONTACT.location}</div>
          </div>
          <div className={styles.asideNote}>
            We typically respond within one business day.
          </div>
        </aside>
      </div>
    </div>
  )
}