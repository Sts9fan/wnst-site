import { Link } from 'react-router-dom'
import styles from './CourseCard.module.css'

const icons = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  group: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  person: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
}

export default function CourseCard({ course, featured }) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.icon}>{icons[course.icon]}</div>
      <div className={styles.tag}>{course.tag}</div>
      <h3 className={styles.title}>{course.title}</h3>
      <p className={styles.subtitle}>{course.subtitle}</p>
      <p className={styles.desc}>{course.description}</p>
      <div className={styles.meta}>
        <span>⏱ {course.duration}</span>
        {course.maxStudents > 1 && <span>👥 Up to {course.maxStudents}</span>}
      </div>
      <div className={styles.bottom}>
        <span className={styles.price}>{course.priceLabel}</span>
        <Link to={`/book?course=${course.id}`} className={styles.bookBtn}>
          Book this →
        </Link>
      </div>
    </div>
  )
}
