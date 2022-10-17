import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Browse.module.css";
import CourseCard from "./CourseCard";
const Browse = () => {
  const [currentBrowse, setCurrentBrowse] = useState("learn");
  const [skillData, setSkillData] = useState([]);
  const [syllabusData, setSyllabusData] = useState([]);
  useEffect(() => {
    if (currentBrowse === "learn") {
      if (skillData.length === 0) {
        axios
          .get(
            "https://api.beyondexams.org/api/v1/get_next_level_topics?level=1&parent_id=0"
          )
          .then((res) => {
            console.log("skillData", res);
            setSkillData(res.data.data.topics.data);
          });
      }
    } else {
      if (syllabusData.length === 0) {
        axios
          .get(
            "https://api.beyondexams.org/api/v1/get_courses?level=1&parent_id=0"
          )
          .then((res) => {
            console.log("syllabusData", res);
            setSyllabusData(res.data.data.courses.data);
          });
      }
    }
  }, [currentBrowse]);
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
        {currentBrowse === "learn"
          ? skillData.length > 0
            ? skillData.map((course, index) => (
                <CourseCard
                  src={course.image_url}
                  title={course.title}
                  count={course.num_topics}
                  key={index}
                />
              ))
            : "Loading..."
          : syllabusData.length > 0
          ? syllabusData.map((course, index) => (
              <CourseCard
                src={course.image_url}
                title={course.title}
                count={course.num_categories}
                key={index}
              />
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default Browse;
