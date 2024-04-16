import React, { useState } from "react";
import { data } from "../../helper/data";
import LessonStyle from "./Lesson.module.css";

const Lesson = () => {
  const [lessons, setLessons] = useState(data);
  const handleClick = () => {
    setLessons([]);
  };
  return (
    <div className={LessonStyle.container}>
      <main className={LessonStyle.main}>
        <h3 className={LessonStyle.title}>
          {lessons.length === 0 ? "0 lessons today" : "6 lessons today"}
        </h3>
        <div className={LessonStyle.card}>
          {lessons.map((item) => (
            <article>
              <img src={item.image} alt="" />
              <div className={LessonStyle.description}>
                <p>
                  <span>Lesson Name :</span> {item.name}
                </p>
                <p>
                  <span>Lesson Hour :</span> {item.hour}
                </p>
              </div>
            </article>
          ))}
        </div>
        <button
          type="button"
          className={LessonStyle.buton}
          onClick={handleClick}
        >
          Clear List
        </button>
      </main>
    </div>
  );
};

export default Lesson;
