import React, { useState } from 'react'
import styles from './ProfileIcon.module.css'
const ProfileIcon = () => {
  const [profileType, setProfileType] = useState('S');
  const handleProfileChange = () => {
    setProfileType((prevState)=> {
      if(prevState === 'S') return 'T'
      else return 'S'
    })
  }
  return (
    <div className={`${styles.profileIconMain} ${profileType === 'S'? styles.student: styles.teacher}`} onClick={handleProfileChange}>
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile Icon" className={styles.profileIconImage} />
      <span className={`${styles.profileIconType} ${profileType === 'S'? styles.student: styles.teacher}`}>
        {profileType}
      </span>
    </div>
  )
}

export default ProfileIcon