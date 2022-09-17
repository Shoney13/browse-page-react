import React from 'react'
import styles from './CourseCard.module.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const CourseCard = (props) => {
  console.log(props)
  return (
    <div className={`${styles.CourseCardMain}`}>
      <div style={{backgroundImage: `url(${props.src})`}} className={`${styles.CourseCardImage}`}/>
      <span className={`${styles.CourseCardTitleArea}`}>
        <span className={`${styles.CourseCardTitle}`}>{props.title}</span> <MoreVertIcon/>
      </span>
      <span className={`${styles.CourseCardDescription}`}>
        {props.count} courses
      </span>
    </div>
  )
}

export default CourseCard