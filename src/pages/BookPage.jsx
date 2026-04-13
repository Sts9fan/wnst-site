import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { COURSES } from '../config.js'
import styles from './BookPage.module.css'
import pageStyles from './Page.module.css'

const AVAILABLE_DAYS = [5, 7, 12, 14, 19, 21, 26, 28]
const TIME_SLOTS = ['9:00 AM', '11:00 AM', '2:00 PM', '4:30 PM']
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa']
const MONTH_NAMES = ['January','February','March','April','May','June',
                     'July','August','September','October','November','December']

function buildCalendar(year, month) {
  const first = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells = []
  for (let i = 0; i < first; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  return cells
}

export default function BookPage() {
  const [params] = useSearchParams()
  const preselect = params.get('course') || ''

  const today = new Date()
  const [calYear,  setCalYear]  = useState(today.getFullYear())
  const [calMonth, setCalMonth] = useState(today.getMonth())
  const [selDay,   setSelDay]   = useState(null)
  const [selTime,  setSelTime]  = useState(null)

  const [form, setForm] = useState({
    courseId: preselect || COURSES[0].id,
    students: '1',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const selectedCourse = COURSES.find(c => c.id === form.courseId) || COURSES[0]
  const cells = buildCalendar(calYear, calMonth)

  function prevMonth() {
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11) }
    else setCalMonth(m => m - 1)
    setSelDay(null); setSelTime(null)
  }
  function nextMonth() {
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0) }
    else setCalMonth(m => m + 1)
    setSelDay(null); setSelTime(null)
  }

  function handleField(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleCheckout(e) {
    e.preventDefault()
    if (!selDay || !selTime) {
      alert('Please select a date and time.')
      return
    }
    if (!form.firstName || !form.lastName || !form.email) {
      alert('Please fill in your name and email.')
      return
    }
    const link = selectedCourse.stripeLink
    if (!link) {
      alert('Stripe payment link not configured yet. Add it to src/config.js.')
      return
    }
    const url = new URL(link)
    url.searchParams.set('prefilled_email', form.email)
    window.location.href = url.toString()
  }

  return (
    <div className={pageStyles.page}>
      <div className={pageStyles.pageHeader}>
        <div className={pageStyles.label}>Booking</div>
        <h1>Reserve your spot</h1>
        <p>Choose a course, pick a date and time, then enter your info.
           You'll be redirected to Stripe to complete payment securely.</p>
      </div>

      <form className={styles.grid} onSubmit={handleCheckout}>
        <div className={styles.left}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Select a course</h3>
            <div className={styles.courseOptions}>
              {COURSES.map(c => (
                <label key={c.id} className={`${styles.courseOption} ${form.courseId === c.id ? styles.courseSelected : ''}`}>
                  <input
                    type="radio"
                    name="courseId"
                    value={c.id}
                    checked={form.courseId === c.id}
                    onChange={handleField}
                    className={styles.srOnly}
                  />
                  <div className={styles.courseOptionName}>{c.title}</div>
                  <div className={styles.courseOptionPrice}>{c.priceLabel}</div>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Select a date</h3>
            <div className={styles.calNav}>
              <button type="button" className={styles.calBtn} onClick={prevMonth}>‹</button>
              <span className={styles.calMonth}>{MONTH_NAMES[calMonth]} {calYear}</span>
              <button type="button" className={styles.calBtn} onClick={nextMonth}>›</button>
            </div>
            <div className={styles.calGrid}>
              {DAYS.map(d => <div key={d} className={styles.calHeader}>{d}</div>)}
              {cells.map((day, i) => {
                if (!day) return <div key={`e${i}`} />
                const avail = AVAILABLE_DAYS.includes(day)
                const sel = selDay === day
                return (
                  <button
                    key={day}
                    type="button"
                    disabled={!avail}
                    onClick={() => { setSelDay(day); setSelTime(null) }}
                    className={`${styles.calDay} ${avail ? styles.calAvail : styles.calDisabled} ${sel ? styles.calSel : ''}`}
                  >
                    {day}
                  </button>
                )
              })}
            </div>

            {selDay && (
              <>
                <p className={styles.timeLabel}>
                  Available times — {MONTH_NAMES[calMonth]} {selDay}
                </p>
                <div className={styles.timeSlots}>
                  {TIME_SLOTS.map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelTime(t)}
                      className={`${styles.timeSlot} ${selTime === t ? styles.timeSel : ''}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Your information</h3>
                    <div className={styles.fieldRow}>
                      <div className={styles.field}>
                        <label className={styles.label}>First name</label>
                        <input name="firstName" value={form.firstName} onChange={handleField} className={styles.input} />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>Last name</label>
                        <input name="lastName" value={form.lastName} onChange={handleField} className={styles.input} />
                      </div>
                    </div>
        
                    <div className={styles.field}>
                      <label className={styles.label}>Email</label>
                      <input name="email" type="email" value={form.email} onChange={handleField} className={styles.input} />
                    </div>
        
                    <div className={styles.field}>
                      <label className={styles.label}>Phone (optional)</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleField} className={styles.input} />
                    </div>
        
                    <div className={styles.field}>
                      <label className={styles.label}>Number of students</label>
                      <select name="students" value={form.students} onChange={handleField} className={styles.select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
        
                    <div className={styles.checkout}>
                      <div className={styles.summary}>
                        <div className={styles.summaryRow}>
                          <div>Course</div>
                          <div>{selectedCourse.title}</div>
                        </div>
                        <div className={styles.summaryRow}>
                          <div>Date</div>
                          <div>{selDay ? `${MONTH_NAMES[calMonth]} ${selDay}` : '—'}</div>
                        </div>
                        <div className={styles.summaryRow}>
                          <div>Time</div>
                          <div>{selTime || '—'}</div>
                        </div>
                        <div className={styles.summaryRow}>
                          <div>Students</div>
                          <div>{form.students}</div>
                        </div>
                      </div>
        
                                  <button className={styles.checkoutBtn} type="submit">
                                    Proceed to payment
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
              )
            }