import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from './NavBar.module.css'
import ProfileIcon from './ProfileIcon'
const NavBar = () => {
  return (
    <div className={styles.NavBarMain}>
      <div className={styles.NavBarLogo} />
      <div className={styles.NavBarSearchArea}>
        <button className={styles.NavBarSearchIcon}> 
          <SearchIcon />
        </button>
        <button className={styles.NavBarCoursesButton}>
          Courses
        </button>
        <span className={styles.NavBarServicesButton}>
          Our services <KeyboardArrowDownIcon/>
        </span>
        <ProfileIcon/>
      </div>
    </div>
  );
};

export default NavBar;
