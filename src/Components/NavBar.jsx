import React, {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from './NavBar.module.css'
import ProfileIcon from './ProfileIcon'
const NavBar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () =>{
    setIsSearchActive(!isSearchActive);
  }

  return (
    <div className={styles.NavBarMain}>
      <div className={styles.NavBarLogo} />
      <div className={styles.NavBarSearchArea}>
        <input type="text" className={`${styles.NavBarSearchInput} ${isSearchActive ? styles.searchActive : ''}`} placeholder='What do you want to learn today?'/>
        <button className={`${styles.NavBarSearchIcon} ${isSearchActive ? styles.searchActive : ''}`} onClick={handleSearchClick}> 
          <SearchIcon />
        </button>
        <button className={`${styles.NavBarCoursesButton} ${isSearchActive ? styles.searchActive : ''}`}>
          Courses
        </button>
        <span className={`${styles.NavBarServicesButton} ${isSearchActive ? styles.searchActive : ''}`}>
          Our services <KeyboardArrowDownIcon/>
        </span>
        <ProfileIcon/>
      </div>
    </div>
  );
};

export default NavBar;
