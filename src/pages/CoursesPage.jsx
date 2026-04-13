import { COURSES } from '../config.js'
import CourseCard from '../components/CourseCard.jsx'
import styles from './Page.module.css'

export default function CoursesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.label}>All courses</div>
        <h1>What we offer</h1>
        <p>Every class is welcoming to all backgrounds and experience levels.
           MA statutory requirements are met in every certified course.</p>
      </div>
      <div className={styles.courseGrid}>
        {COURSES.map(c => <CourseCard key={c.id} course={c} />)}
      </div>

      <div className={styles.infoBox}>
        <h3>What to expect in any class</h3>
        <ul>
          <li>Safe and responsible handling — the foundation of every session</li>
          <li>Massachusetts firearms law overview (MGL c.140, storage requirements, transport rules)</li>
          <li>Secure storage solutions and best practices for home defense</li>
          <li>Q&amp;A — no question is too basic</li>
          <li>Certificate of completion for LTC/FID courses, issued same day</li>
        </ul>
      </div>
    </div>
  )
}