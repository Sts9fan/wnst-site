import { useState } from 'react'
import { INTAKE_QUESTIONS, CONTACT } from '../config.js'
import styles from './IntakePage.module.css'
import pageStyles from './Page.module.css'

const FORM_ENDPOINT = ''

export default function IntakePage() {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleChange(id, value) {
    setAnswers(a => ({ ...a, [id]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    const unanswered = INTAKE_QUESTIONS
      .filter(q => q.type !== 'textarea')
      .filter(q => !answers[q.id])
    if (unanswered.length > 0) {
      setError('Please answer all required questions before submitting.')
      return
    }

    if (!FORM_ENDPOINT) {
      setSubmitted(true)
      return
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(answers),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Submission failed. Please email us directly at ' + CONTACT.email)
      }
    } catch {
      setError('Network error. Please email us directly at ' + CONTACT.email)
    }
  }

  if (submitted) {
    return (
      <div className={pageStyles.page}>
        <div className={styles.successBox}>
          <div className={styles.successIcon}>✓</div>
          <h2>Questionnaire received</h2>
          <p>Thanks for completing the pre-enrollment form. Your instructor will review it before your session.</p>
          <p>Questions? Email us at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
        </div>
      </div>
    )
  }

  return (
    <div className={pageStyles.page}>
      <div className={pageStyles.pageHeader}>
        <div className={pageStyles.label}>Pre-enrollment</div>
        <h1>Student questionnaire</h1>
        <p>Takes about 2 minutes. Helps your instructor prepare the right session for you.
           All answers are kept confidential.</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {INTAKE_QUESTIONS.map((q, i) => (
          <div key={q.id} className={styles.question}>
            <div className={styles.qLabel}>
              <span className={styles.qNum}>{i + 1}</span>
              {q.label}
              {q.type !== 'textarea' && <span className={styles.required}>*</span>}
            </div>
            {q.sublabel && <div className={styles.qSublabel}>{q.sublabel}</div>}

            {q.type === 'radio' && (
              <div className={styles.radioGroup}>
                {q.options.map(opt => (
                  <label
                    key={opt}
                    className={`${styles.radioPill} ${answers[q.id] === opt ? styles.radioSelected : ''}`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={opt}
                      checked={answers[q.id] === opt}
                      onChange={() => handleChange(q.id, opt)}
                      className={styles.srOnly}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            )}

            {q.type === 'textarea' && (
              <textarea
                className={styles.textarea}
                rows={4}
                placeholder={q.placeholder}
                value={answers[q.id] || ''}
                onChange={e => handleChange(q.id, e.target.value)}
              />
            )}
          </div>
        ))}

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.submitBtn}>
          Submit questionnaire →
        </button>
      </form>
    </div>
  )
}