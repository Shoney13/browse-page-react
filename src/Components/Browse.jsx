import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Browse.module.css";
import CourseCard from "./CourseCard";
const Browse = () => {
  const [currentBrowse, setCurrentBrowse] = useState("learn");
  const [skillData, setSkillData] = useState([])
  useEffect(() =>{
    axios.get('https://api.beyondexams.org/api/v1/get_next_level_topics?level=1&parent_id=0')
    .then((res)=>{
      console.log(res.data.data.data)
      setSkillData(res.data.data.data)
    })
  },[])
  return (
    <div className={`${styles.browseMain}`}>
      <div className={`${styles.browseSelector}`}>
        <button
          className={`${styles.browseButton} ${
            currentBrowse === "learn" ? styles.active : ""
          }`}
          onClick={() => setCurrentBrowse("learn")}
        >
          Learn A Skill
        </button>
        <button
          className={`${styles.browseButton} ${
            currentBrowse === "revise" ? styles.active : ""
          }`}
          onClick={() => setCurrentBrowse("revise")}
        >
          Revise Your Syllabus
        </button>
      </div>
      <div className={`${styles.browseCards}`}>
        {skillData.length > 0 ? skillData.map((course, index)=><CourseCard src={course.image_url} title={course.title} count={course.video_count}/>) : 'Loading...'}
      </div>
    </div>
  );
};

export default Browse;
