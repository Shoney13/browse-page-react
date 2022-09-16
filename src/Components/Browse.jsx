import React, { useState } from "react";
import styles from "./Browse.module.css";
const Browse = () => {
  const [currentBrowse, setCurrentBrowse] = useState("learn");
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
    </div>
  );
};

export default Browse;
