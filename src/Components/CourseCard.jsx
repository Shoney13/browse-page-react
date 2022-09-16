import React from 'react'
import styles from './CourseCard.module.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const CourseCard = () => {
  return (
    <div className={`${styles.CourseCardMain}`}>
      <img src="https://api.beyondexams.org/course/images/1624634100.png" alt=""  className={`${styles.CourseCardImage}`}/>
      <span className={`${styles.CourseCardTitle}`}>
        Good Course <MoreVertIcon/>
      </span>
      <span className={`${styles.CourseCardDescription}`}>
        48 courses
      </span>
    </div>
  )
}

export default CourseCard