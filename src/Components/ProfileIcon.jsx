import React from 'react'
import styles from './ProfileIcon.module.css'
const ProfileIcon = () => {
  return (
    <div className={styles.profileIconMain}>
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile Icon" className={styles.profileIconImage} />
      <span className={styles.profileIconType}>
        S
      </span>
    </div>
  )
}

export default ProfileIcon